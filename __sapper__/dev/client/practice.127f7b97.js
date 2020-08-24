import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, n as navStore, o as onDestroy, v as validate_slots, b as space, e as element, t as text, q as query_selector_all, c as detach_dev, g as claim_space, h as claim_element, j as children, k as claim_text, m as add_location, l as attr_dev, p as insert_dev, r as append_dev, u as noop } from './client.51f18c4f.js';
import { F as Footer } from './footer.4d205077.js';

/* src/routes/practice.svelte generated by Svelte v3.24.1 */
const file = "src/routes/practice.svelte";

function create_fragment(ctx) {
	let t0;
	let div;
	let ul;
	let li0;
	let t1;
	let t2;
	let li1;
	let t3;
	let t4;
	let li2;
	let t5;
	let t6;
	let li3;
	let t7;
	let t8;
	let li4;
	let t9;
	let t10;
	let li5;
	let t11;
	let t12;
	let li6;
	let t13;

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			ul = element("ul");
			li0 = element("li");
			t1 = text("Agricultural Law");
			t2 = space();
			li1 = element("li");
			t3 = text("Business Law");
			t4 = space();
			li2 = element("li");
			t5 = text("Family Law");
			t6 = space();
			li3 = element("li");
			t7 = text("Civil Litigation");
			t8 = space();
			li4 = element("li");
			t9 = text("Estate Planning");
			t10 = space();
			li5 = element("li");
			t11 = text("Real Estate");
			t12 = space();
			li6 = element("li");
			t13 = text("Tax Preparation and Advice");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-v2ns25\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			ul = claim_element(div_nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t1 = claim_text(li0_nodes, "Agricultural Law");
			li0_nodes.forEach(detach_dev);
			t2 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t3 = claim_text(li1_nodes, "Business Law");
			li1_nodes.forEach(detach_dev);
			t4 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t5 = claim_text(li2_nodes, "Family Law");
			li2_nodes.forEach(detach_dev);
			t6 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			t7 = claim_text(li3_nodes, "Civil Litigation");
			li3_nodes.forEach(detach_dev);
			t8 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", {});
			var li4_nodes = children(li4);
			t9 = claim_text(li4_nodes, "Estate Planning");
			li4_nodes.forEach(detach_dev);
			t10 = claim_space(ul_nodes);
			li5 = claim_element(ul_nodes, "LI", {});
			var li5_nodes = children(li5);
			t11 = claim_text(li5_nodes, "Real Estate");
			li5_nodes.forEach(detach_dev);
			t12 = claim_space(ul_nodes);
			li6 = claim_element(ul_nodes, "LI", {});
			var li6_nodes = children(li6);
			t13 = claim_text(li6_nodes, "Tax Preparation and Advice");
			li6_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Areas of Practice";
			add_location(li0, file, 38, 4, 730);
			add_location(li1, file, 39, 4, 760);
			add_location(li2, file, 40, 4, 786);
			add_location(li3, file, 41, 4, 810);
			add_location(li4, file, 42, 4, 840);
			add_location(li5, file, 43, 4, 869);
			add_location(li6, file, 44, 4, 894);
			add_location(ul, file, 37, 2, 721);
			attr_dev(div, "class", "practice-container svelte-15nyxbd");
			add_location(div, file, 36, 0, 686);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, ul);
			append_dev(ul, li0);
			append_dev(li0, t1);
			append_dev(ul, t2);
			append_dev(ul, li1);
			append_dev(li1, t3);
			append_dev(ul, t4);
			append_dev(ul, li2);
			append_dev(li2, t5);
			append_dev(ul, t6);
			append_dev(ul, li3);
			append_dev(li3, t7);
			append_dev(ul, t8);
			append_dev(ul, li4);
			append_dev(li4, t9);
			append_dev(ul, t10);
			append_dev(ul, li5);
			append_dev(li5, t11);
			append_dev(ul, t12);
			append_dev(ul, li6);
			append_dev(li6, t13);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
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
	let pageIsActive;

	const unsubscribeNav = navStore.subscribe(activePage => {
		pageIsActive = activePage;
	});

	navStore.update(() => {
		return { activePage: "practice" };
	});

	onDestroy(() => {
		if (unsubscribeNav) {
			unsubscribeNav();
		}
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Practice> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Practice", $$slots, []);

	$$self.$capture_state = () => ({
		onDestroy,
		navStore,
		Footer,
		pageIsActive,
		unsubscribeNav
	});

	$$self.$inject_state = $$props => {
		if ("pageIsActive" in $$props) pageIsActive = $$props.pageIsActive;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [];
}

class Practice extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Practice",
			options,
			id: create_fragment.name
		});
	}
}

export default Practice;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJhY3RpY2UuMTI3ZjdiOTcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJhY3RpY2Uuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uRGVzdHJveSB9IGZyb20gXCJzdmVsdGVcIjtcbiAgaW1wb3J0IG5hdlN0b3JlIGZyb20gXCIuLi9zdG9yZXMvbmF2LXN0b3JlLmpzXCI7XG4gIGltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyLnN2ZWx0ZVwiO1xuICBsZXQgcGFnZUlzQWN0aXZlO1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlTmF2ID0gbmF2U3RvcmUuc3Vic2NyaWJlKGFjdGl2ZVBhZ2UgPT4ge1xuICAgIHBhZ2VJc0FjdGl2ZSA9IGFjdGl2ZVBhZ2U7XG4gIH0pO1xuXG4gIG5hdlN0b3JlLnVwZGF0ZSgoKSA9PiB7XG4gICAgcmV0dXJuIHsgYWN0aXZlUGFnZTogXCJwcmFjdGljZVwiIH07XG4gIH0pO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgaWYgKHVuc3Vic2NyaWJlTmF2KSB7XG4gICAgICB1bnN1YnNjcmliZU5hdigpO1xuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAucHJhY3RpY2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5BcmVhcyBvZiBQcmFjdGljZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwicHJhY3RpY2UtY29udGFpbmVyXCI+XG4gIDx1bD5cbiAgICA8bGk+QWdyaWN1bHR1cmFsIExhdzwvbGk+XG4gICAgPGxpPkJ1c2luZXNzIExhdzwvbGk+XG4gICAgPGxpPkZhbWlseSBMYXc8L2xpPlxuICAgIDxsaT5DaXZpbCBMaXRpZ2F0aW9uPC9saT5cbiAgICA8bGk+RXN0YXRlIFBsYW5uaW5nPC9saT5cbiAgICA8bGk+UmVhbCBFc3RhdGU8L2xpPlxuICAgIDxsaT5UYXggUHJlcGFyYXRpb24gYW5kIEFkdmljZTwvbGk+XG4gIDwvdWw+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBSU0sWUFBWTs7T0FFVixjQUFjLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVO0VBQ2xELFlBQVksR0FBRyxVQUFVOzs7Q0FHM0IsUUFBUSxDQUFDLE1BQU07V0FDSixVQUFVLEVBQUUsVUFBVTs7O0NBR2pDLFNBQVM7TUFDSCxjQUFjO0dBQ2hCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==