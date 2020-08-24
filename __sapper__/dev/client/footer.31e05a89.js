import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, f as fade, e as element, t as text, h as claim_element, j as children, k as claim_text, c as detach_dev, l as attr_dev, m as add_location, p as insert_dev, r as append_dev, u as noop, w as add_render_callback, x as create_in_transition } from './client.058e51b6.js';

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
			attr_dev(p, "class", "svelte-10ujz13");
			add_location(p, file, 21, 2, 394);
			attr_dev(footer, "class", "svelte-10ujz13");
			add_location(footer, file, 20, 0, 343);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLjMxZTA1YTg5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb290ZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGZhZGUgfSBmcm9tIFwic3ZlbHRlL3RyYW5zaXRpb25cIjtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGZvb3RlciB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsIDIyMCwgMjIwLCAwLjMpO1xuICAgIHBhZGRpbmc6IDFyZW0gMHJlbTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoNjUsIDEwNywgMTc2KTtcbiAgfVxuXG4gIGZvb3RlciA+IHAge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIG1hcmdpbjogMXJlbSAxcmVtIDAgMXJlbTtcbiAgfVxuPC9zdHlsZT5cblxuPGZvb3RlciBpbjpmYWRlPXt7IGR1cmF0aW9uOiA0MDAsIGRlbGF5OiAyMDAgfX0+XG4gIDxwPlxuICAgICogSW5mb3JtYXRpb24gb24gdGhpcyB3ZWJzaXRlIGlzIGdlbmVyYWwgaW4gbmF0dXJlIGFuZCBzaG91bGQgbm90IGJlXG4gICAgY29uc2lkZXJlZCBsZWdhbCBhZHZpY2Ugb3IgYXBwbGljYWJsZSB0byBhIHNwZWNpZmljIGZhY3R1YWwgc2l0dWF0aW9uLiBUaGVcbiAgICBmaXJtJ3MgcHJhY3RpY2UgbWF5IGJlIGxpbWl0ZWQgdG8gdGhlIFN0YXRlIG9mIE5lYnJhc2thLiBTZW5kaW5nXG4gICAgY29tbXVuaWNhdGlvbiB0aHJvdWdoIHRoaXMgd2Vic2l0ZSBkb2VzIG5vdCBjcmVhdGUgYW4gYXR0b3JuZXktY2xpZW50XG4gICAgcmVsYXRpb25zaGlwIGFuZCBpbmZvcm1hdGlvbiBtaWdodCBub3QgYmUga2VwdCBjb25maWRlbnRpYWwgb3IgcHJpdmlsZWdlZC5cbiAgICBTZW5kaW5nIGluZm9ybWF0aW9uIHRvIHRoZSBmaXJtIHdpbGwgbm90IGNyZWF0ZSBhIGNvbmZsaWN0IGZvciB0aGUgZmlybSBpblxuICAgIHN1YnNlcXVlbnQgcmVwcmVzZW50YXRpb25zIHVubGVzcyB0aGUgZmlybSBoYXMgYWdyZWVkIHRvIGVzdGFibGlzaCBhblxuICAgIGF0dG9ybmV5LWNsaWVudCByZWxhdGlvbnNoaXAgd2l0aCB0aGUgc2VuZGVyLlxuICA8L3A+XG48L2Zvb3Rlcj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQW9CbUIsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
