import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, f as fade, e as element, t as text, j as claim_element, k as children, l as claim_text, g as detach_dev, p as attr_dev, r as add_location, u as insert_dev, w as append_dev, y as noop, z as add_render_callback, A as create_in_transition } from './client.029bd913.js';

/* src/components/footer.svelte generated by Svelte v3.24.1 */
const file = "src/components/footer.svelte";

function create_fragment(ctx) {
	let footer;
	let p;
	let t;
	let footer_intro;

	const block = {
		c: function create() {
			footer = element("footer");
			p = element("p");
			t = text("* Information on this website is general in nature and should not be\n    considered legal advice or applicable to a specific factual situation. The\n    firm's practice may be limited to the State of Nebraska. Sending\n    communication through this website does not create an attorney-client\n    relationship and information might not be kept confidential or privileged.\n    Sending information to the firm will not create a conflict for the firm in\n    subsequent representations unless the firm has agreed to establish an\n    attorney-client relationship with the sender.");
			this.h();
		},
		l: function claim(nodes) {
			footer = claim_element(nodes, "FOOTER", { class: true });
			var footer_nodes = children(footer);
			p = claim_element(footer_nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, "* Information on this website is general in nature and should not be\n    considered legal advice or applicable to a specific factual situation. The\n    firm's practice may be limited to the State of Nebraska. Sending\n    communication through this website does not create an attorney-client\n    relationship and information might not be kept confidential or privileged.\n    Sending information to the firm will not create a conflict for the firm in\n    subsequent representations unless the firm has agreed to establish an\n    attorney-client relationship with the sender.");
			p_nodes.forEach(detach_dev);
			footer_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "svelte-5v8qiw");
			add_location(p, file, 21, 2, 380);
			attr_dev(footer, "class", "svelte-5v8qiw");
			add_location(footer, file, 20, 0, 329);
		},
		m: function mount(target, anchor) {
			insert_dev(target, footer, anchor);
			append_dev(footer, p);
			append_dev(p, t);
		},
		p: noop,
		i: function intro(local) {
			if (!footer_intro) {
				add_render_callback(() => {
					footer_intro = create_in_transition(footer, fade, { duration: 400, delay: 200 });
					footer_intro.start();
				});
			}
		},
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(footer);
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
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Footer> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Footer", $$slots, []);
	$$self.$capture_state = () => ({ fade });
	return [];
}

class Footer extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Footer",
			options,
			id: create_fragment.name
		});
	}
}

export { Footer as F };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmI1ZmMxMjk5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb290ZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGZhZGUgfSBmcm9tIFwic3ZlbHRlL3RyYW5zaXRpb25cIjtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwgMjIwLCAyMjAsIDAuMyk7XG4gICAgcGFkZGluZzogMXJlbSAwcmVtO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIG5hdnk7XG4gIH1cblxuICBmb290ZXIgPiBwIHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBtYXJnaW46IDFyZW0gMXJlbSAwIDFyZW07XG4gIH1cbjwvc3R5bGU+XG5cbjxmb290ZXIgaW46ZmFkZT17eyBkdXJhdGlvbjogNDAwLCBkZWxheTogMjAwIH19PlxuICA8cD5cbiAgICAqIEluZm9ybWF0aW9uIG9uIHRoaXMgd2Vic2l0ZSBpcyBnZW5lcmFsIGluIG5hdHVyZSBhbmQgc2hvdWxkIG5vdCBiZVxuICAgIGNvbnNpZGVyZWQgbGVnYWwgYWR2aWNlIG9yIGFwcGxpY2FibGUgdG8gYSBzcGVjaWZpYyBmYWN0dWFsIHNpdHVhdGlvbi4gVGhlXG4gICAgZmlybSdzIHByYWN0aWNlIG1heSBiZSBsaW1pdGVkIHRvIHRoZSBTdGF0ZSBvZiBOZWJyYXNrYS4gU2VuZGluZ1xuICAgIGNvbW11bmljYXRpb24gdGhyb3VnaCB0aGlzIHdlYnNpdGUgZG9lcyBub3QgY3JlYXRlIGFuIGF0dG9ybmV5LWNsaWVudFxuICAgIHJlbGF0aW9uc2hpcCBhbmQgaW5mb3JtYXRpb24gbWlnaHQgbm90IGJlIGtlcHQgY29uZmlkZW50aWFsIG9yIHByaXZpbGVnZWQuXG4gICAgU2VuZGluZyBpbmZvcm1hdGlvbiB0byB0aGUgZmlybSB3aWxsIG5vdCBjcmVhdGUgYSBjb25mbGljdCBmb3IgdGhlIGZpcm0gaW5cbiAgICBzdWJzZXF1ZW50IHJlcHJlc2VudGF0aW9ucyB1bmxlc3MgdGhlIGZpcm0gaGFzIGFncmVlZCB0byBlc3RhYmxpc2ggYW5cbiAgICBhdHRvcm5leS1jbGllbnQgcmVsYXRpb25zaGlwIHdpdGggdGhlIHNlbmRlci5cbiAgPC9wPlxuPC9mb290ZXI+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5REFvQm1CLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==