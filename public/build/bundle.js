
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.24.1' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/Nav.svelte generated by Svelte v3.24.1 */

    const file = "src/Nav.svelte";

    // (16:0) {#if !mobile}
    function create_if_block_1(ctx) {
    	let nav;
    	let div1;
    	let a0;
    	let t1;
    	let ul1;
    	let li0;
    	let a1;
    	let t3;
    	let li1;
    	let a2;
    	let t5;
    	let li2;
    	let a3;
    	let t7;
    	let li7;
    	let a4;
    	let t9;
    	let div0;
    	let ul0;
    	let li3;
    	let a5;
    	let t11;
    	let li4;
    	let a6;
    	let t13;
    	let li5;
    	let a7;
    	let t15;
    	let li6;
    	let a8;
    	let t17;
    	let li8;
    	let a9;

    	const block = {
    		c: function create() {
    			nav = element("nav");
    			div1 = element("div");
    			a0 = element("a");
    			a0.textContent = "Logo";
    			t1 = space();
    			ul1 = element("ul");
    			li0 = element("li");
    			a1 = element("a");
    			a1.textContent = "Home";
    			t3 = space();
    			li1 = element("li");
    			a2 = element("a");
    			a2.textContent = "About";
    			t5 = space();
    			li2 = element("li");
    			a3 = element("a");
    			a3.textContent = "Areas of Practice";
    			t7 = space();
    			li7 = element("li");
    			a4 = element("a");
    			a4.textContent = "Locations";
    			t9 = space();
    			div0 = element("div");
    			ul0 = element("ul");
    			li3 = element("li");
    			a5 = element("a");
    			a5.textContent = "Franklin, NE";
    			t11 = space();
    			li4 = element("li");
    			a6 = element("a");
    			a6.textContent = "Alma, NE";
    			t13 = space();
    			li5 = element("li");
    			a7 = element("a");
    			a7.textContent = "Oxford, NE";
    			t15 = space();
    			li6 = element("li");
    			a8 = element("a");
    			a8.textContent = "Hildreth, NE";
    			t17 = space();
    			li8 = element("li");
    			a9 = element("a");
    			a9.textContent = "Contact";
    			attr_dev(a0, "class", "uk-navbar-item uk-logo");
    			attr_dev(a0, "href", "#");
    			add_location(a0, file, 19, 6, 402);
    			attr_dev(a1, "href", "#");
    			add_location(a1, file, 22, 10, 528);
    			attr_dev(li0, "class", "uk-active");
    			add_location(li0, file, 21, 8, 495);
    			attr_dev(a2, "href", "#");
    			add_location(a2, file, 25, 10, 586);
    			add_location(li1, file, 24, 8, 571);
    			attr_dev(a3, "href", "#");
    			add_location(a3, file, 28, 10, 645);
    			add_location(li2, file, 27, 8, 630);
    			attr_dev(a4, "href", "#");
    			add_location(a4, file, 31, 10, 716);
    			attr_dev(a5, "href", "#");
    			add_location(a5, file, 35, 16, 875);
    			add_location(li3, file, 34, 14, 854);
    			attr_dev(a6, "href", "#");
    			add_location(a6, file, 38, 16, 959);
    			add_location(li4, file, 37, 14, 938);
    			attr_dev(a7, "href", "#");
    			add_location(a7, file, 41, 16, 1039);
    			add_location(li5, file, 40, 14, 1018);
    			attr_dev(a8, "href", "#");
    			add_location(a8, file, 44, 16, 1121);
    			add_location(li6, file, 43, 14, 1100);
    			attr_dev(ul0, "class", "uk-nav uk-navbar-dropdown-nav");
    			add_location(ul0, file, 33, 12, 797);
    			attr_dev(div0, "class", "uk-navbar-dropdown");
    			add_location(div0, file, 32, 10, 752);
    			add_location(li7, file, 30, 8, 701);
    			attr_dev(a9, "href", "#");
    			add_location(a9, file, 50, 10, 1242);
    			add_location(li8, file, 49, 8, 1227);
    			attr_dev(ul1, "class", "uk-navbar-nav");
    			add_location(ul1, file, 20, 6, 460);
    			attr_dev(div1, "class", "uk-navbar-center");
    			add_location(div1, file, 18, 4, 365);
    			attr_dev(nav, "class", "uk-navbar-container");
    			attr_dev(nav, "uk-navbar", "");
    			add_location(nav, file, 17, 2, 317);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, nav, anchor);
    			append_dev(nav, div1);
    			append_dev(div1, a0);
    			append_dev(div1, t1);
    			append_dev(div1, ul1);
    			append_dev(ul1, li0);
    			append_dev(li0, a1);
    			append_dev(ul1, t3);
    			append_dev(ul1, li1);
    			append_dev(li1, a2);
    			append_dev(ul1, t5);
    			append_dev(ul1, li2);
    			append_dev(li2, a3);
    			append_dev(ul1, t7);
    			append_dev(ul1, li7);
    			append_dev(li7, a4);
    			append_dev(li7, t9);
    			append_dev(li7, div0);
    			append_dev(div0, ul0);
    			append_dev(ul0, li3);
    			append_dev(li3, a5);
    			append_dev(ul0, t11);
    			append_dev(ul0, li4);
    			append_dev(li4, a6);
    			append_dev(ul0, t13);
    			append_dev(ul0, li5);
    			append_dev(li5, a7);
    			append_dev(ul0, t15);
    			append_dev(ul0, li6);
    			append_dev(li6, a8);
    			append_dev(ul1, t17);
    			append_dev(ul1, li8);
    			append_dev(li8, a9);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(nav);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(16:0) {#if !mobile}",
    		ctx
    	});

    	return block;
    }

    // (59:0) {#if mobile}
    function create_if_block(ctx) {
    	let nav;
    	let div1;
    	let li5;
    	let a0;
    	let span0;
    	let t0;
    	let span1;
    	let t2;
    	let div0;
    	let ul;
    	let li0;
    	let a1;
    	let t4;
    	let li1;
    	let a2;
    	let t6;
    	let li2;
    	let a3;
    	let t8;
    	let li3;
    	let a4;
    	let t10;
    	let li4;
    	let a5;

    	const block = {
    		c: function create() {
    			nav = element("nav");
    			div1 = element("div");
    			li5 = element("li");
    			a0 = element("a");
    			span0 = element("span");
    			t0 = space();
    			span1 = element("span");
    			span1.textContent = "Menu";
    			t2 = space();
    			div0 = element("div");
    			ul = element("ul");
    			li0 = element("li");
    			a1 = element("a");
    			a1.textContent = "Home";
    			t4 = space();
    			li1 = element("li");
    			a2 = element("a");
    			a2.textContent = "About";
    			t6 = space();
    			li2 = element("li");
    			a3 = element("a");
    			a3.textContent = "Areas of Practice";
    			t8 = space();
    			li3 = element("li");
    			a4 = element("a");
    			a4.textContent = "Locations";
    			t10 = space();
    			li4 = element("li");
    			a5 = element("a");
    			a5.textContent = "Contact";
    			attr_dev(span0, "uk-navbar-toggle-icon", "");
    			add_location(span0, file, 63, 10, 1508);
    			attr_dev(span1, "class", "uk-margin-small-left");
    			add_location(span1, file, 64, 10, 1549);
    			attr_dev(a0, "class", "uk-navbar-toggle");
    			attr_dev(a0, "href", "#");
    			add_location(a0, file, 62, 8, 1460);
    			attr_dev(a1, "href", "#");
    			add_location(a1, file, 69, 14, 1752);
    			attr_dev(li0, "class", "uk-active");
    			add_location(li0, file, 68, 12, 1715);
    			attr_dev(a2, "href", "#");
    			add_location(a2, file, 72, 14, 1822);
    			add_location(li1, file, 71, 12, 1803);
    			attr_dev(a3, "href", "#");
    			add_location(a3, file, 75, 14, 1893);
    			add_location(li2, file, 74, 12, 1874);
    			attr_dev(a4, "href", "#");
    			add_location(a4, file, 78, 14, 1976);
    			add_location(li3, file, 77, 12, 1957);
    			attr_dev(a5, "href", "#");
    			add_location(a5, file, 81, 14, 2051);
    			add_location(li4, file, 80, 12, 2032);
    			attr_dev(ul, "class", "uk-nav uk-navbar-dropdown-nav");
    			add_location(ul, file, 67, 10, 1660);
    			attr_dev(div0, "class", "uk-navbar-dropdown");
    			add_location(div0, file, 66, 8, 1617);
    			add_location(li5, file, 61, 6, 1447);
    			attr_dev(div1, "class", "uk-navbar-left");
    			add_location(div1, file, 60, 4, 1412);
    			attr_dev(nav, "class", "uk-navbar uk-navbar-container uk-margin");
    			add_location(nav, file, 59, 2, 1354);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, nav, anchor);
    			append_dev(nav, div1);
    			append_dev(div1, li5);
    			append_dev(li5, a0);
    			append_dev(a0, span0);
    			append_dev(a0, t0);
    			append_dev(a0, span1);
    			append_dev(li5, t2);
    			append_dev(li5, div0);
    			append_dev(div0, ul);
    			append_dev(ul, li0);
    			append_dev(li0, a1);
    			append_dev(ul, t4);
    			append_dev(ul, li1);
    			append_dev(li1, a2);
    			append_dev(ul, t6);
    			append_dev(ul, li2);
    			append_dev(li2, a3);
    			append_dev(ul, t8);
    			append_dev(ul, li3);
    			append_dev(li3, a4);
    			append_dev(ul, t10);
    			append_dev(ul, li4);
    			append_dev(li4, a5);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(nav);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(59:0) {#if mobile}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let t;
    	let if_block1_anchor;
    	let if_block0 = !/*mobile*/ ctx[0] && create_if_block_1(ctx);
    	let if_block1 = /*mobile*/ ctx[0] && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			if (if_block0) if_block0.c();
    			t = space();
    			if (if_block1) if_block1.c();
    			if_block1_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t, anchor);
    			if (if_block1) if_block1.m(target, anchor);
    			insert_dev(target, if_block1_anchor, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t);
    			if (if_block1) if_block1.d(detaching);
    			if (detaching) detach_dev(if_block1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function assignActive() {
    	
    }

    function instance($$self, $$props, $$invalidate) {
    	let mobile = false;
    	let { active } = $$props;
    	let { homePage = true } = $$props;
    	let { aboutPage = false } = $$props;
    	let { practicePage = false } = $$props;
    	let { locationsPage = false } = $$props;
    	let { contactPage = false } = $$props;

    	const writable_props = [
    		"active",
    		"homePage",
    		"aboutPage",
    		"practicePage",
    		"locationsPage",
    		"contactPage"
    	];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Nav> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Nav", $$slots, []);

    	$$self.$$set = $$props => {
    		if ("active" in $$props) $$invalidate(1, active = $$props.active);
    		if ("homePage" in $$props) $$invalidate(2, homePage = $$props.homePage);
    		if ("aboutPage" in $$props) $$invalidate(3, aboutPage = $$props.aboutPage);
    		if ("practicePage" in $$props) $$invalidate(4, practicePage = $$props.practicePage);
    		if ("locationsPage" in $$props) $$invalidate(5, locationsPage = $$props.locationsPage);
    		if ("contactPage" in $$props) $$invalidate(6, contactPage = $$props.contactPage);
    	};

    	$$self.$capture_state = () => ({
    		mobile,
    		active,
    		homePage,
    		aboutPage,
    		practicePage,
    		locationsPage,
    		contactPage,
    		assignActive
    	});

    	$$self.$inject_state = $$props => {
    		if ("mobile" in $$props) $$invalidate(0, mobile = $$props.mobile);
    		if ("active" in $$props) $$invalidate(1, active = $$props.active);
    		if ("homePage" in $$props) $$invalidate(2, homePage = $$props.homePage);
    		if ("aboutPage" in $$props) $$invalidate(3, aboutPage = $$props.aboutPage);
    		if ("practicePage" in $$props) $$invalidate(4, practicePage = $$props.practicePage);
    		if ("locationsPage" in $$props) $$invalidate(5, locationsPage = $$props.locationsPage);
    		if ("contactPage" in $$props) $$invalidate(6, contactPage = $$props.contactPage);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [mobile, active, homePage, aboutPage, practicePage, locationsPage, contactPage];
    }

    class Nav extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance, create_fragment, safe_not_equal, {
    			active: 1,
    			homePage: 2,
    			aboutPage: 3,
    			practicePage: 4,
    			locationsPage: 5,
    			contactPage: 6
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Nav",
    			options,
    			id: create_fragment.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*active*/ ctx[1] === undefined && !("active" in props)) {
    			console.warn("<Nav> was created without expected prop 'active'");
    		}
    	}

    	get active() {
    		throw new Error("<Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set active(value) {
    		throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get homePage() {
    		throw new Error("<Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set homePage(value) {
    		throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get aboutPage() {
    		throw new Error("<Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set aboutPage(value) {
    		throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get practicePage() {
    		throw new Error("<Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set practicePage(value) {
    		throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get locationsPage() {
    		throw new Error("<Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set locationsPage(value) {
    		throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get contactPage() {
    		throw new Error("<Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set contactPage(value) {
    		throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Footer.svelte generated by Svelte v3.24.1 */

    const file$1 = "src/Footer.svelte";

    function create_fragment$1(ctx) {
    	let footer;
    	let div;
    	let p;

    	const block = {
    		c: function create() {
    			footer = element("footer");
    			div = element("div");
    			p = element("p");
    			p.textContent = "* Information on this website is general in nature and should not be\n      considered legal advice or applicable to a specific factual situation. The\n      firm's practice may be limited to the State of Nebraska. Sending\n      communication through this website does not create an attorney-client\n      relationship and information might not be kept confidential or privileged.\n      Sending information to the firm will not create a conflict for the firm in\n      subsequent representations unless the firm has agreed to establish an\n      attorney-client relationship with the sender.";
    			attr_dev(p, "class", "svelte-152kx0r");
    			add_location(p, file$1, 21, 4, 339);
    			attr_dev(div, "class", "footer-container svelte-152kx0r");
    			add_location(div, file$1, 20, 2, 304);
    			attr_dev(footer, "class", "svelte-152kx0r");
    			add_location(footer, file$1, 19, 0, 293);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, footer, anchor);
    			append_dev(footer, div);
    			append_dev(div, p);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(footer);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props) {
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Footer> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Footer", $$slots, []);
    	return [];
    }

    class Footer extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Footer",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src/pages/Home.svelte generated by Svelte v3.24.1 */

    const file$2 = "src/pages/Home.svelte";

    function create_fragment$2(ctx) {
    	let div12;
    	let div3;
    	let div0;
    	let img0;
    	let img0_src_value;
    	let t0;
    	let canvas0;
    	let t1;
    	let div2;
    	let div1;
    	let h30;
    	let t3;
    	let p0;
    	let t5;
    	let div7;
    	let div4;
    	let img1;
    	let img1_src_value;
    	let t6;
    	let canvas1;
    	let t7;
    	let div6;
    	let div5;
    	let h31;
    	let t9;
    	let p1;
    	let t11;
    	let div11;
    	let div8;
    	let img2;
    	let img2_src_value;
    	let t12;
    	let canvas2;
    	let t13;
    	let div10;
    	let div9;
    	let h32;
    	let t15;
    	let p2;

    	const block = {
    		c: function create() {
    			div12 = element("div");
    			div3 = element("div");
    			div0 = element("div");
    			img0 = element("img");
    			t0 = space();
    			canvas0 = element("canvas");
    			t1 = space();
    			div2 = element("div");
    			div1 = element("div");
    			h30 = element("h3");
    			h30.textContent = "Our Firm";
    			t3 = space();
    			p0 = element("p");
    			p0.textContent = "Duncan, Walker, Schenker & Daake, P.C., L.L.O. represents individuals,\n          families, farmers, banks, and small businesses. With our extensive\n          experience, our practice has developed into a comprehensive law firm\n          handling an assortment of legal issues.";
    			t5 = space();
    			div7 = element("div");
    			div4 = element("div");
    			img1 = element("img");
    			t6 = space();
    			canvas1 = element("canvas");
    			t7 = space();
    			div6 = element("div");
    			div5 = element("div");
    			h31 = element("h3");
    			h31.textContent = "A Client First Approach";
    			t9 = space();
    			p1 = element("p");
    			p1.textContent = "Our background in law allows us to meet the often complex and\n          interdisciplinary needs of our local citizens. Our clients' interests\n          are at the heart of everything we do. We place a strong emphasis on\n          professionalism and serving the needs of the residents of South\n          Central Nebraska.";
    			t11 = space();
    			div11 = element("div");
    			div8 = element("div");
    			img2 = element("img");
    			t12 = space();
    			canvas2 = element("canvas");
    			t13 = space();
    			div10 = element("div");
    			div9 = element("div");
    			h32 = element("h3");
    			h32.textContent = "Here When You Need Us";
    			t15 = space();
    			p2 = element("p");
    			p2.textContent = "We are grateful for our communities, our clients, and friends and\n          welcome the opportunity to assist you with your particular legal\n          situation. Feel free to stop by or call to discuss your legal needs.";
    			if (img0.src !== (img0_src_value = "./images/farming.jpg")) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "alt", "Farming");
    			attr_dev(img0, "uk-cover", "");
    			add_location(img0, file$2, 20, 6, 377);
    			attr_dev(canvas0, "width", "450");
    			attr_dev(canvas0, "height", "250");
    			add_location(canvas0, file$2, 21, 6, 441);
    			attr_dev(div0, "class", "uk-card-media-left uk-cover-container");
    			add_location(div0, file$2, 19, 4, 319);
    			attr_dev(h30, "class", "uk-card-title");
    			add_location(h30, file$2, 25, 8, 539);
    			add_location(p0, file$2, 26, 8, 587);
    			attr_dev(div1, "class", "uk-card-body");
    			add_location(div1, file$2, 24, 6, 504);
    			add_location(div2, file$2, 23, 4, 492);
    			attr_dev(div3, "class", "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\n    uk-margin");
    			attr_dev(div3, "uk-grid", "");
    			add_location(div3, file$2, 15, 2, 209);
    			if (img1.src !== (img1_src_value = "./images/ladyJustice.jpg")) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "alt", "");
    			attr_dev(img1, "uk-cover", "");
    			add_location(img1, file$2, 41, 6, 1128);
    			attr_dev(canvas1, "width", "450");
    			attr_dev(canvas1, "height", "250");
    			add_location(canvas1, file$2, 42, 6, 1189);
    			attr_dev(div4, "class", "uk-flex-last@s uk-card-media-right uk-cover-container");
    			add_location(div4, file$2, 40, 4, 1054);
    			attr_dev(h31, "class", "uk-card-title");
    			add_location(h31, file$2, 46, 8, 1287);
    			add_location(p1, file$2, 47, 8, 1350);
    			attr_dev(div5, "class", "uk-card-body");
    			add_location(div5, file$2, 45, 6, 1252);
    			add_location(div6, file$2, 44, 4, 1240);
    			attr_dev(div7, "class", "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\n    uk-margin");
    			attr_dev(div7, "uk-grid", "");
    			add_location(div7, file$2, 36, 2, 944);
    			if (img2.src !== (img2_src_value = "./images/mainStreet.jpg")) attr_dev(img2, "src", img2_src_value);
    			attr_dev(img2, "alt", "Main Street");
    			attr_dev(img2, "uk-cover", "");
    			add_location(img2, file$2, 63, 6, 1920);
    			attr_dev(canvas2, "width", "450");
    			attr_dev(canvas2, "height", "250");
    			add_location(canvas2, file$2, 64, 6, 1991);
    			attr_dev(div8, "class", "uk-card-media-left uk-cover-container");
    			add_location(div8, file$2, 62, 4, 1862);
    			attr_dev(h32, "class", "uk-card-title");
    			add_location(h32, file$2, 68, 8, 2089);
    			add_location(p2, file$2, 69, 8, 2150);
    			attr_dev(div9, "class", "uk-card-body");
    			add_location(div9, file$2, 67, 6, 2054);
    			add_location(div10, file$2, 66, 4, 2042);
    			attr_dev(div11, "class", "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\n    uk-margin");
    			attr_dev(div11, "uk-grid", "");
    			add_location(div11, file$2, 58, 2, 1752);
    			attr_dev(div12, "class", "home-container svelte-1kdh9wh");
    			add_location(div12, file$2, 12, 0, 125);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div12, anchor);
    			append_dev(div12, div3);
    			append_dev(div3, div0);
    			append_dev(div0, img0);
    			append_dev(div0, t0);
    			append_dev(div0, canvas0);
    			append_dev(div3, t1);
    			append_dev(div3, div2);
    			append_dev(div2, div1);
    			append_dev(div1, h30);
    			append_dev(div1, t3);
    			append_dev(div1, p0);
    			append_dev(div12, t5);
    			append_dev(div12, div7);
    			append_dev(div7, div4);
    			append_dev(div4, img1);
    			append_dev(div4, t6);
    			append_dev(div4, canvas1);
    			append_dev(div7, t7);
    			append_dev(div7, div6);
    			append_dev(div6, div5);
    			append_dev(div5, h31);
    			append_dev(div5, t9);
    			append_dev(div5, p1);
    			append_dev(div12, t11);
    			append_dev(div12, div11);
    			append_dev(div11, div8);
    			append_dev(div8, img2);
    			append_dev(div8, t12);
    			append_dev(div8, canvas2);
    			append_dev(div11, t13);
    			append_dev(div11, div10);
    			append_dev(div10, div9);
    			append_dev(div9, h32);
    			append_dev(div9, t15);
    			append_dev(div9, p2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div12);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props) {
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Home> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Home", $$slots, []);
    	return [];
    }

    class Home extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Home",
    			options,
    			id: create_fragment$2.name
    		});
    	}
    }

    /* src/Main.svelte generated by Svelte v3.24.1 */
    const file$3 = "src/Main.svelte";

    function create_fragment$3(ctx) {
    	let main;
    	let home;
    	let current;
    	home = new Home({ $$inline: true });

    	const block = {
    		c: function create() {
    			main = element("main");
    			create_component(home.$$.fragment);
    			add_location(main, file$3, 4, 0, 62);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			mount_component(home, main, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(home.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(home.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			destroy_component(home);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Main> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Main", $$slots, []);
    	$$self.$capture_state = () => ({ Home });
    	return [];
    }

    class Main extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Main",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    /* src/SideNav.svelte generated by Svelte v3.24.1 */

    const file$4 = "src/SideNav.svelte";

    function create_fragment$4(ctx) {
    	let aside;
    	let div1;
    	let div0;
    	let h4;
    	let t1;
    	let ul;
    	let li0;
    	let t3;
    	let hr0;
    	let t4;
    	let li1;
    	let t6;
    	let hr1;
    	let t7;
    	let li2;
    	let t9;
    	let hr2;
    	let t10;
    	let li3;
    	let t12;
    	let div3;
    	let div2;
    	let h3;
    	let t14;
    	let p;
    	let t15;
    	let a;
    	let t17;

    	const block = {
    		c: function create() {
    			aside = element("aside");
    			div1 = element("div");
    			div0 = element("div");
    			h4 = element("h4");
    			h4.textContent = "Call us!";
    			t1 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "Franklin office: (308) 425-6273";
    			t3 = space();
    			hr0 = element("hr");
    			t4 = space();
    			li1 = element("li");
    			li1.textContent = "Alma office: (308) 928-2165";
    			t6 = space();
    			hr1 = element("hr");
    			t7 = space();
    			li2 = element("li");
    			li2.textContent = "Oxford office: (308) 824-3231";
    			t9 = space();
    			hr2 = element("hr");
    			t10 = space();
    			li3 = element("li");
    			li3.textContent = "Hildreth office: (308) 938-4585";
    			t12 = space();
    			div3 = element("div");
    			div2 = element("div");
    			h3 = element("h3");
    			h3.textContent = "Operating Hours";
    			t14 = space();
    			p = element("p");
    			t15 = text("Lorem ipsum\n        ");
    			a = element("a");
    			a.textContent = "dolor";
    			t17 = text("\n        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n        ut labore et dolore magna aliqua.");
    			attr_dev(h4, "class", "uk-card-title");
    			add_location(h4, file$4, 25, 6, 458);
    			add_location(li0, file$4, 27, 8, 533);
    			add_location(hr0, file$4, 28, 8, 582);
    			add_location(li1, file$4, 29, 8, 597);
    			add_location(hr1, file$4, 30, 8, 642);
    			add_location(li2, file$4, 31, 8, 657);
    			add_location(hr2, file$4, 32, 8, 704);
    			add_location(li3, file$4, 33, 8, 719);
    			attr_dev(ul, "class", "uk-list");
    			add_location(ul, file$4, 26, 6, 504);
    			attr_dev(div0, "class", "uk-card uk-card-default uk-card-body");
    			add_location(div0, file$4, 24, 4, 401);
    			attr_dev(div1, "class", "contact-numbers svelte-1jdd7vo");
    			add_location(div1, file$4, 23, 2, 367);
    			attr_dev(h3, "class", "uk-card-title");
    			add_location(h3, file$4, 40, 6, 890);
    			attr_dev(a, "href", "#");
    			add_location(a, file$4, 43, 8, 975);
    			add_location(p, file$4, 41, 6, 943);
    			attr_dev(div2, "class", "uk-card uk-card-default uk-card-body");
    			add_location(div2, file$4, 39, 4, 833);
    			attr_dev(div3, "class", "hours-of-operations svelte-1jdd7vo");
    			add_location(div3, file$4, 38, 2, 795);
    			attr_dev(aside, "class", "aside-grid svelte-1jdd7vo");
    			add_location(aside, file$4, 22, 0, 338);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, aside, anchor);
    			append_dev(aside, div1);
    			append_dev(div1, div0);
    			append_dev(div0, h4);
    			append_dev(div0, t1);
    			append_dev(div0, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t3);
    			append_dev(ul, hr0);
    			append_dev(ul, t4);
    			append_dev(ul, li1);
    			append_dev(ul, t6);
    			append_dev(ul, hr1);
    			append_dev(ul, t7);
    			append_dev(ul, li2);
    			append_dev(ul, t9);
    			append_dev(ul, hr2);
    			append_dev(ul, t10);
    			append_dev(ul, li3);
    			append_dev(aside, t12);
    			append_dev(aside, div3);
    			append_dev(div3, div2);
    			append_dev(div2, h3);
    			append_dev(div2, t14);
    			append_dev(div2, p);
    			append_dev(p, t15);
    			append_dev(p, a);
    			append_dev(p, t17);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(aside);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props) {
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SideNav> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("SideNav", $$slots, []);
    	return [];
    }

    class SideNav extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "SideNav",
    			options,
    			id: create_fragment$4.name
    		});
    	}
    }

    /* src/App.svelte generated by Svelte v3.24.1 */
    const file$5 = "src/App.svelte";

    function create_fragment$5(ctx) {
    	let div;
    	let nav;
    	let t0;
    	let main;
    	let t1;
    	let footer;
    	let current;
    	nav = new Nav({ $$inline: true });
    	main = new Main({ $$inline: true });
    	footer = new Footer({ $$inline: true });

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(nav.$$.fragment);
    			t0 = space();
    			create_component(main.$$.fragment);
    			t1 = space();
    			create_component(footer.$$.fragment);
    			attr_dev(div, "class", "grid");
    			add_location(div, file$5, 11, 0, 191);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(nav, div, null);
    			append_dev(div, t0);
    			mount_component(main, div, null);
    			append_dev(div, t1);
    			mount_component(footer, div, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(nav.$$.fragment, local);
    			transition_in(main.$$.fragment, local);
    			transition_in(footer.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(nav.$$.fragment, local);
    			transition_out(main.$$.fragment, local);
    			transition_out(footer.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(nav);
    			destroy_component(main);
    			destroy_component(footer);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("App", $$slots, []);
    	$$self.$capture_state = () => ({ Nav, Footer, Main, SideNav });
    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$5.name
    		});
    	}
    }

    const app = new App({
      target: document.body,
      intro: true,
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
