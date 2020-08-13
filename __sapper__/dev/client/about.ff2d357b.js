import { A as writable, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, b as claim_element, f as children, g as claim_space, j as claim_text, h as detach_dev, l as attr_dev, m as add_location, n as insert_dev, o as append_dev, B as set_data_dev, q as noop, C as validate_each_argument, F as Footer, c as create_component, k as claim_component, p as mount_component, w as transition_in, x as transition_out, y as destroy_component, D as check_outros, r as add_render_callback, u as create_in_transition, E as destroy_each, G as group_outros } from './client.1aae357b.js';
import { f as fade } from './index.eb1e1ba7.js';

const aboutData = writable([
  {
    name: 'Jacklyn Daake',
    phone: '123-456-7890',
    email: 'jackie@lawyer.com',
    img: './images/jaclyn.jpg',
  },
  {
    name: 'Henry Schenker',
    phone: '123-456-7890',
    email: 'henry@lawyer.com',
    img: './images/henry.jpg',
  },
  {
    name: 'Douglas R. Walker',
    phone: '123-456-7890',
    email: 'doug@lawyer.com',
    img: './images/doug.jpg',
  },
  {
    name: 'Patrick A. Duncan',
    phone: '123-456-7890',
    email: 'pat@lawyer.com',
    img: './images/patrick.jpg',
  },
]);

/* src/components/Card.svelte generated by Svelte v3.24.1 */

const file = "src/components/Card.svelte";

function create_fragment(ctx) {
	let section;
	let div5;
	let header;
	let img;
	let img_src_value;
	let t0;
	let div0;
	let h4;
	let t1;
	let h4_uk_target_value;
	let t2;
	let div4;
	let div3;
	let div1;
	let t3;
	let t4;
	let t5;
	let div2;
	let t6;
	let a;
	let t7;
	let a_href_value;

	const block = {
		c: function create() {
			section = element("section");
			div5 = element("div");
			header = element("header");
			img = element("img");
			t0 = space();
			div0 = element("div");
			h4 = element("h4");
			t1 = text(/*name*/ ctx[0]);
			t2 = space();
			div4 = element("div");
			div3 = element("div");
			div1 = element("div");
			t3 = text("Phone: ");
			t4 = text(/*phone*/ ctx[2]);
			t5 = space();
			div2 = element("div");
			t6 = text("Email:\n          ");
			a = element("a");
			t7 = text(/*email*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div5 = claim_element(section_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			header = claim_element(div5_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			img = claim_element(header_nodes, "IMG", { src: true, alt: true, class: true });
			t0 = claim_space(header_nodes);
			div0 = claim_element(header_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h4 = claim_element(div0_nodes, "H4", { "uk-target": true, class: true });
			var h4_nodes = children(h4);
			t1 = claim_text(h4_nodes, /*name*/ ctx[0]);
			h4_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			t2 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", {});
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			t3 = claim_text(div1_nodes, "Phone: ");
			t4 = claim_text(div1_nodes, /*phone*/ ctx[2]);
			div1_nodes.forEach(detach_dev);
			t5 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			t6 = claim_text(div2_nodes, "Email:\n          ");
			a = claim_element(div2_nodes, "A", { href: true });
			var a_nodes = children(a);
			t7 = claim_text(a_nodes, /*email*/ ctx[3]);
			a_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*image*/ ctx[1])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", /*name*/ ctx[0]);
			attr_dev(img, "class", "svelte-1f51ddg");
			add_location(img, file, 66, 6, 1411);
			attr_dev(h4, "uk-target", h4_uk_target_value = "" + (/*name*/ ctx[0] + "Modal"));
			attr_dev(h4, "class", "svelte-1f51ddg");
			add_location(h4, file, 68, 8, 1519);
			attr_dev(div0, "class", "uk-overlay uk-overlay-primary uk-position-bottom svelte-1f51ddg");
			add_location(div0, file, 67, 6, 1448);
			attr_dev(header, "class", "image uk-inline svelte-1f51ddg");
			add_location(header, file, 65, 4, 1372);
			add_location(div1, file, 73, 8, 1632);
			attr_dev(a, "href", a_href_value = "mailto:" + /*email*/ ctx[3]);
			add_location(a, file, 77, 10, 1723);
			add_location(div2, file, 75, 8, 1690);
			attr_dev(div3, "class", "details svelte-1f51ddg");
			add_location(div3, file, 72, 6, 1602);
			add_location(div4, file, 71, 4, 1590);
			attr_dev(div5, "class", "card-container uk-box-shadow-large svelte-1f51ddg");
			add_location(div5, file, 64, 2, 1319);
			attr_dev(section, "class", "svelte-1f51ddg");
			add_location(section, file, 63, 0, 1307);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div5);
			append_dev(div5, header);
			append_dev(header, img);
			append_dev(header, t0);
			append_dev(header, div0);
			append_dev(div0, h4);
			append_dev(h4, t1);
			append_dev(div5, t2);
			append_dev(div5, div4);
			append_dev(div4, div3);
			append_dev(div3, div1);
			append_dev(div1, t3);
			append_dev(div1, t4);
			append_dev(div3, t5);
			append_dev(div3, div2);
			append_dev(div2, t6);
			append_dev(div2, a);
			append_dev(a, t7);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*image*/ 2 && img.src !== (img_src_value = /*image*/ ctx[1])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*name*/ 1) {
				attr_dev(img, "alt", /*name*/ ctx[0]);
			}

			if (dirty & /*name*/ 1) set_data_dev(t1, /*name*/ ctx[0]);

			if (dirty & /*name*/ 1 && h4_uk_target_value !== (h4_uk_target_value = "" + (/*name*/ ctx[0] + "Modal"))) {
				attr_dev(h4, "uk-target", h4_uk_target_value);
			}

			if (dirty & /*phone*/ 4) set_data_dev(t4, /*phone*/ ctx[2]);
			if (dirty & /*email*/ 8) set_data_dev(t7, /*email*/ ctx[3]);

			if (dirty & /*email*/ 8 && a_href_value !== (a_href_value = "mailto:" + /*email*/ ctx[3])) {
				attr_dev(a, "href", a_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
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

function instance($$self, $$props, $$invalidate) {
	let { name } = $$props;
	let { image } = $$props;
	let { phone } = $$props;
	let { email } = $$props;
	let { bio } = $$props;
	const writable_props = ["name", "image", "phone", "email", "bio"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Card> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Card", $$slots, []);

	$$self.$$set = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("image" in $$props) $$invalidate(1, image = $$props.image);
		if ("phone" in $$props) $$invalidate(2, phone = $$props.phone);
		if ("email" in $$props) $$invalidate(3, email = $$props.email);
		if ("bio" in $$props) $$invalidate(4, bio = $$props.bio);
	};

	$$self.$capture_state = () => ({ name, image, phone, email, bio });

	$$self.$inject_state = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("image" in $$props) $$invalidate(1, image = $$props.image);
		if ("phone" in $$props) $$invalidate(2, phone = $$props.phone);
		if ("email" in $$props) $$invalidate(3, email = $$props.email);
		if ("bio" in $$props) $$invalidate(4, bio = $$props.bio);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [name, image, phone, email, bio];
}

class Card extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			name: 0,
			image: 1,
			phone: 2,
			email: 3,
			bio: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Card",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*name*/ ctx[0] === undefined && !("name" in props)) {
			console.warn("<Card> was created without expected prop 'name'");
		}

		if (/*image*/ ctx[1] === undefined && !("image" in props)) {
			console.warn("<Card> was created without expected prop 'image'");
		}

		if (/*phone*/ ctx[2] === undefined && !("phone" in props)) {
			console.warn("<Card> was created without expected prop 'phone'");
		}

		if (/*email*/ ctx[3] === undefined && !("email" in props)) {
			console.warn("<Card> was created without expected prop 'email'");
		}

		if (/*bio*/ ctx[4] === undefined && !("bio" in props)) {
			console.warn("<Card> was created without expected prop 'bio'");
		}
	}

	get name() {
		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get image() {
		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set image(value) {
		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get phone() {
		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set phone(value) {
		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get email() {
		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set email(value) {
		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get bio() {
		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set bio(value) {
		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/about.svelte generated by Svelte v3.24.1 */
const file$1 = "src/routes/about.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (50:2) {#each attorneys as attorney}
function create_each_block(ctx) {
	let card;
	let current;

	card = new Card({
			props: {
				name: /*attorney*/ ctx[1].name,
				image: /*attorney*/ ctx[1].img,
				phone: /*attorney*/ ctx[1].phone,
				email: /*attorney*/ ctx[1].email,
				bio: /*attorney*/ ctx[1].bio
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(card.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(card.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(card, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const card_changes = {};
			if (dirty & /*attorneys*/ 1) card_changes.name = /*attorney*/ ctx[1].name;
			if (dirty & /*attorneys*/ 1) card_changes.image = /*attorney*/ ctx[1].img;
			if (dirty & /*attorneys*/ 1) card_changes.phone = /*attorney*/ ctx[1].phone;
			if (dirty & /*attorneys*/ 1) card_changes.email = /*attorney*/ ctx[1].email;
			if (dirty & /*attorneys*/ 1) card_changes.bio = /*attorney*/ ctx[1].bio;
			card.$set(card_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(card.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(card.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(card, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(50:2) {#each attorneys as attorney}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let div_intro;
	let t3;
	let section;
	let section_intro;
	let t4;
	let footer;
	let current;
	let each_value = /*attorneys*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	footer = new Footer({ $$inline: true });

	const block = {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t0 = text("Meet Our Experienced Legal Team");
			t1 = space();
			p = element("p");
			t2 = text("All of our lawyers and experienced, professional staff are focused on\n    providing you with first-rate legal representation and services, regardless\n    of size or complexity of the case.");
			t3 = space();
			section = element("section");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h2 = claim_element(div_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Meet Our Experienced Legal Team");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			p = claim_element(div_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "All of our lawyers and experienced, professional staff are focused on\n    providing you with first-rate legal representation and services, regardless\n    of size or complexity of the case.");
			p_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(section_nodes);
			}

			section_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			claim_component(footer.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-1lz1jmy");
			add_location(h2, file$1, 40, 2, 876);
			attr_dev(p, "class", "svelte-1lz1jmy");
			add_location(p, file$1, 41, 2, 919);
			attr_dev(div, "class", "header-container svelte-1lz1jmy");
			add_location(div, file$1, 39, 0, 803);
			attr_dev(section, "class", "svelte-1lz1jmy");
			add_location(section, file$1, 48, 0, 1144);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h2);
			append_dev(h2, t0);
			append_dev(div, t1);
			append_dev(div, p);
			append_dev(p, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, section, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(section, null);
			}

			insert_dev(target, t4, anchor);
			mount_component(footer, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*attorneys*/ 1) {
				each_value = /*attorneys*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(section, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			if (!div_intro) {
				add_render_callback(() => {
					div_intro = create_in_transition(div, fade, { duration: 400, delay: 200 });
					div_intro.start();
				});
			}

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			if (!section_intro) {
				add_render_callback(() => {
					section_intro = create_in_transition(section, fade, { duration: 800, delay: 500 });
					section_intro.start();
				});
			}

			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(section);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t4);
			destroy_component(footer, detaching);
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

function instance$1($$self, $$props, $$invalidate) {
	let attorneys;

	aboutData.subscribe(lawyer => {
		$$invalidate(0, attorneys = lawyer);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("About", $$slots, []);
	$$self.$capture_state = () => ({ aboutData, fade, Card, Footer, attorneys });

	$$self.$inject_state = $$props => {
		if ("attorneys" in $$props) $$invalidate(0, attorneys = $$props.attorneys);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [attorneys];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment$1.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuZmYyZDM1N2IuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdG9yZXMvYWJvdXQtc3RvcmUuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DYXJkLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblxuY29uc3QgYWJvdXREYXRhID0gd3JpdGFibGUoW1xuICB7XG4gICAgbmFtZTogJ0phY2tseW4gRGFha2UnLFxuICAgIHBob25lOiAnMTIzLTQ1Ni03ODkwJyxcbiAgICBlbWFpbDogJ2phY2tpZUBsYXd5ZXIuY29tJyxcbiAgICBpbWc6ICcuL2ltYWdlcy9qYWNseW4uanBnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdIZW5yeSBTY2hlbmtlcicsXG4gICAgcGhvbmU6ICcxMjMtNDU2LTc4OTAnLFxuICAgIGVtYWlsOiAnaGVucnlAbGF3eWVyLmNvbScsXG4gICAgaW1nOiAnLi9pbWFnZXMvaGVucnkuanBnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEb3VnbGFzIFIuIFdhbGtlcicsXG4gICAgcGhvbmU6ICcxMjMtNDU2LTc4OTAnLFxuICAgIGVtYWlsOiAnZG91Z0BsYXd5ZXIuY29tJyxcbiAgICBpbWc6ICcuL2ltYWdlcy9kb3VnLmpwZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUGF0cmljayBBLiBEdW5jYW4nLFxuICAgIHBob25lOiAnMTIzLTQ1Ni03ODkwJyxcbiAgICBlbWFpbDogJ3BhdEBsYXd5ZXIuY29tJyxcbiAgICBpbWc6ICcuL2ltYWdlcy9wYXRyaWNrLmpwZycsXG4gIH0sXG5dKTtcblxuZXhwb3J0IGRlZmF1bHQgYWJvdXREYXRhO1xuIiwiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBuYW1lO1xuICBleHBvcnQgbGV0IGltYWdlO1xuICBleHBvcnQgbGV0IHBob25lO1xuICBleHBvcnQgbGV0IGVtYWlsO1xuICBleHBvcnQgbGV0IGJpbztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xuXG4gIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIge1xuICAgIHdpZHRoOiAyNTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleGJveDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpOyAqL1xuICAgIC8qIGJveC1zaGFkb3c6IDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAyKSxcbiAgICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjAyOCksIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAzNSksXG4gICAgICAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA0MiksIDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxuICAgICAgMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7ICovXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDJyZW07XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5pbWFnZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIC5kZXRhaWxzIHtcbiAgICAvKiBmb250LWZhbWlseTogXCJQZXJtYW5lbnQgTWFya2VyXCIsIGN1cnNpdmU7ICovXG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIkZpcmEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGRpdiA+IGg0OmhvdmVyIHtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgfVxuXG4gIGg0IHtcbiAgICBmb250LWZhbWlseTogXCJGaXJhIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbjwvc3R5bGU+XG5cbjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXIgdWstYm94LXNoYWRvdy1sYXJnZVwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJpbWFnZSB1ay1pbmxpbmVcIj5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtuYW1lfSAvPlxuICAgICAgPGRpdiBjbGFzcz1cInVrLW92ZXJsYXkgdWstb3ZlcmxheS1wcmltYXJ5IHVrLXBvc2l0aW9uLWJvdHRvbVwiPlxuICAgICAgICA8aDQgdWstdGFyZ2V0PVwie25hbWV9TW9kYWxcIj57bmFtZX08L2g0PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG4gICAgICAgIDxkaXY+UGhvbmU6IHtwaG9uZX08L2Rpdj5cbiAgICAgICAgPCEtLSA8aHIgLz4gLS0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgRW1haWw6XG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzp7ZW1haWx9XCI+e2VtYWlsfTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gPGhyIC8+XG4gICAgICAgPGRpdj5BYm91dDoge2Jpb308L2Rpdj4gLS0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iLCI8c2NyaXB0PlxuICBpbXBvcnQgYWJvdXREYXRhIGZyb20gXCIuLi9zdG9yZXMvYWJvdXQtc3RvcmVcIjtcbiAgaW1wb3J0IHsgZmFkZSB9IGZyb20gXCJzdmVsdGUvdHJhbnNpdGlvblwiO1xuICBpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLnN2ZWx0ZVwiO1xuICBpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci5zdmVsdGVcIjtcblxuICBsZXQgYXR0b3JuZXlzO1xuXG4gIGFib3V0RGF0YS5zdWJzY3JpYmUobGF3eWVyID0+IHtcbiAgICBhdHRvcm5leXMgPSBsYXd5ZXI7XG4gIH0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogOTB2dztcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyID4gaDIge1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiRmlyYSBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIgPiBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiRmlyYSBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCIgaW46ZmFkZT17eyBkdXJhdGlvbjogNDAwLCBkZWxheTogMjAwIH19PlxuICA8aDI+TWVldCBPdXIgRXhwZXJpZW5jZWQgTGVnYWwgVGVhbTwvaDI+XG4gIDxwPlxuICAgIEFsbCBvZiBvdXIgbGF3eWVycyBhbmQgZXhwZXJpZW5jZWQsIHByb2Zlc3Npb25hbCBzdGFmZiBhcmUgZm9jdXNlZCBvblxuICAgIHByb3ZpZGluZyB5b3Ugd2l0aCBmaXJzdC1yYXRlIGxlZ2FsIHJlcHJlc2VudGF0aW9uIGFuZCBzZXJ2aWNlcywgcmVnYXJkbGVzc1xuICAgIG9mIHNpemUgb3IgY29tcGxleGl0eSBvZiB0aGUgY2FzZS5cbiAgPC9wPlxuPC9kaXY+XG48IS0tIGNhcmQgLS0+XG48c2VjdGlvbiBpbjpmYWRlPXt7IGR1cmF0aW9uOiA4MDAsIGRlbGF5OiA1MDAgfX0+XG4gIHsjZWFjaCBhdHRvcm5leXMgYXMgYXR0b3JuZXl9XG4gICAgPENhcmRcbiAgICAgIG5hbWU9e2F0dG9ybmV5Lm5hbWV9XG4gICAgICBpbWFnZT17YXR0b3JuZXkuaW1nfVxuICAgICAgcGhvbmU9e2F0dG9ybmV5LnBob25lfVxuICAgICAgZW1haWw9e2F0dG9ybmV5LmVtYWlsfVxuICAgICAgYmlvPXthdHRvcm5leS5iaW99IC8+XG4gIHsvZWFjaH1cbjwvc2VjdGlvbj5cbjxGb290ZXIgLz5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUM7QUFDM0IsRUFBRTtBQUNGLElBQUksSUFBSSxFQUFFLGVBQWU7QUFDekIsSUFBSSxLQUFLLEVBQUUsY0FBYztBQUN6QixJQUFJLEtBQUssRUFBRSxtQkFBbUI7QUFDOUIsSUFBSSxHQUFHLEVBQUUscUJBQXFCO0FBQzlCLEdBQUc7QUFDSCxFQUFFO0FBQ0YsSUFBSSxJQUFJ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
