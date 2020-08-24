import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, n as navStore, o as onDestroy, v as validate_slots, f as fade, b as space, e as element, t as text, q as query_selector_all, c as detach_dev, g as claim_space, h as claim_element, j as children, k as claim_text, l as attr_dev, m as add_location, p as insert_dev, r as append_dev, u as noop, w as add_render_callback, x as create_in_transition } from './client.9a949976.js';
import { F as Footer } from './footer.799df411.js';

/* src/routes/practice.svelte generated by Svelte v3.24.1 */
const file = "src/routes/practice.svelte";

function create_fragment(ctx) {
	let t0;
	let div4;
	let div3;
	let div0;
	let img;
	let img_src_value;
	let t1;
	let canvas;
	let t2;
	let div2;
	let div1;
	let h3;
	let t3;
	let t4;
	let p;
	let t5;
	let t6;
	let ul;
	let li0;
	let t7;
	let t8;
	let li1;
	let t9;
	let t10;
	let li2;
	let t11;
	let t12;
	let li3;
	let t13;
	let t14;
	let li4;
	let t15;
	let t16;
	let li5;
	let t17;
	let t18;
	let li6;
	let t19;
	let div4_intro;

	const block = {
		c: function create() {
			t0 = space();
			div4 = element("div");
			div3 = element("div");
			div0 = element("div");
			img = element("img");
			t1 = space();
			canvas = element("canvas");
			t2 = space();
			div2 = element("div");
			div1 = element("div");
			h3 = element("h3");
			t3 = text("Areas of Practice");
			t4 = space();
			p = element("p");
			t5 = text("Our team specializes in the following areas of practice:");
			t6 = space();
			ul = element("ul");
			li0 = element("li");
			t7 = text("Agricultural Law");
			t8 = space();
			li1 = element("li");
			t9 = text("Business Law");
			t10 = space();
			li2 = element("li");
			t11 = text("Family Law");
			t12 = space();
			li3 = element("li");
			t13 = text("Civil Litigation");
			t14 = space();
			li4 = element("li");
			t15 = text("Estate Planning");
			t16 = space();
			li5 = element("li");
			t17 = text("Real Estate");
			t18 = space();
			li6 = element("li");
			t19 = text("Tax Preparation and Advice");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-v2ns25\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true, "uk-grid": true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, "uk-cover": true });
			t1 = claim_space(div0_nodes);
			canvas = claim_element(div0_nodes, "CANVAS", { width: true, height: true });
			children(canvas).forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h3 = claim_element(div1_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t3 = claim_text(h3_nodes, "Areas of Practice");
			h3_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t5 = claim_text(p_nodes, "Our team specializes in the following areas of practice:");
			p_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			ul = claim_element(div1_nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			t7 = claim_text(li0_nodes, "Agricultural Law");
			li0_nodes.forEach(detach_dev);
			t8 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			t9 = claim_text(li1_nodes, "Business Law");
			li1_nodes.forEach(detach_dev);
			t10 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			t11 = claim_text(li2_nodes, "Family Law");
			li2_nodes.forEach(detach_dev);
			t12 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", { class: true });
			var li3_nodes = children(li3);
			t13 = claim_text(li3_nodes, "Civil Litigation");
			li3_nodes.forEach(detach_dev);
			t14 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", { class: true });
			var li4_nodes = children(li4);
			t15 = claim_text(li4_nodes, "Estate Planning");
			li4_nodes.forEach(detach_dev);
			t16 = claim_space(ul_nodes);
			li5 = claim_element(ul_nodes, "LI", { class: true });
			var li5_nodes = children(li5);
			t17 = claim_text(li5_nodes, "Real Estate");
			li5_nodes.forEach(detach_dev);
			t18 = claim_space(ul_nodes);
			li6 = claim_element(ul_nodes, "LI", { class: true });
			var li6_nodes = children(li6);
			t19 = claim_text(li6_nodes, "Tax Preparation and Advice");
			li6_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Areas of Practice";
			if (img.src !== (img_src_value = "./images/ladyjustice.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Lady Justice");
			attr_dev(img, "uk-cover", "");
			add_location(img, file, 53, 6, 1127);
			attr_dev(canvas, "width", "500");
			attr_dev(canvas, "height", "400");
			add_location(canvas, file, 54, 6, 1200);
			attr_dev(div0, "class", "uk-card-media-left uk-cover-container");
			add_location(div0, file, 52, 4, 1069);
			attr_dev(h3, "class", "uk-card-title svelte-1x7qg5m");
			add_location(h3, file, 58, 8, 1298);
			attr_dev(p, "class", "svelte-1x7qg5m");
			add_location(p, file, 59, 8, 1355);
			attr_dev(li0, "class", "svelte-1x7qg5m");
			add_location(li0, file, 61, 10, 1442);
			attr_dev(li1, "class", "svelte-1x7qg5m");
			add_location(li1, file, 62, 10, 1478);
			attr_dev(li2, "class", "svelte-1x7qg5m");
			add_location(li2, file, 63, 10, 1510);
			attr_dev(li3, "class", "svelte-1x7qg5m");
			add_location(li3, file, 64, 10, 1540);
			attr_dev(li4, "class", "svelte-1x7qg5m");
			add_location(li4, file, 65, 10, 1576);
			attr_dev(li5, "class", "svelte-1x7qg5m");
			add_location(li5, file, 66, 10, 1611);
			attr_dev(li6, "class", "svelte-1x7qg5m");
			add_location(li6, file, 67, 10, 1642);
			add_location(ul, file, 60, 8, 1427);
			attr_dev(div1, "class", "uk-card-body");
			add_location(div1, file, 57, 6, 1263);
			add_location(div2, file, 56, 4, 1251);
			attr_dev(div3, "class", "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\n    uk-margin uk-box-shadow-medium");
			attr_dev(div3, "uk-grid", "");
			add_location(div3, file, 48, 2, 938);
			attr_dev(div4, "class", "practice-container svelte-1x7qg5m");
			add_location(div4, file, 45, 0, 844);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div4, anchor);
			append_dev(div4, div3);
			append_dev(div3, div0);
			append_dev(div0, img);
			append_dev(div0, t1);
			append_dev(div0, canvas);
			append_dev(div3, t2);
			append_dev(div3, div2);
			append_dev(div2, div1);
			append_dev(div1, h3);
			append_dev(h3, t3);
			append_dev(div1, t4);
			append_dev(div1, p);
			append_dev(p, t5);
			append_dev(div1, t6);
			append_dev(div1, ul);
			append_dev(ul, li0);
			append_dev(li0, t7);
			append_dev(ul, t8);
			append_dev(ul, li1);
			append_dev(li1, t9);
			append_dev(ul, t10);
			append_dev(ul, li2);
			append_dev(li2, t11);
			append_dev(ul, t12);
			append_dev(ul, li3);
			append_dev(li3, t13);
			append_dev(ul, t14);
			append_dev(ul, li4);
			append_dev(li4, t15);
			append_dev(ul, t16);
			append_dev(ul, li5);
			append_dev(li5, t17);
			append_dev(ul, t18);
			append_dev(ul, li6);
			append_dev(li6, t19);
		},
		p: noop,
		i: function intro(local) {
			if (!div4_intro) {
				add_render_callback(() => {
					div4_intro = create_in_transition(div4, fade, { duration: 400, delay: 100 });
					div4_intro.start();
				});
			}
		},
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div4);
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
		fade,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJhY3RpY2UuYjk5ZmNhY2MuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJhY3RpY2Uuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uRGVzdHJveSB9IGZyb20gXCJzdmVsdGVcIjtcbiAgaW1wb3J0IG5hdlN0b3JlIGZyb20gXCIuLi9zdG9yZXMvbmF2LXN0b3JlLmpzXCI7XG4gIGltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyLnN2ZWx0ZVwiO1xuICBpbXBvcnQgeyBmYWRlIH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG4gIGxldCBwYWdlSXNBY3RpdmU7XG5cbiAgY29uc3QgdW5zdWJzY3JpYmVOYXYgPSBuYXZTdG9yZS5zdWJzY3JpYmUoYWN0aXZlUGFnZSA9PiB7XG4gICAgcGFnZUlzQWN0aXZlID0gYWN0aXZlUGFnZTtcbiAgfSk7XG5cbiAgbmF2U3RvcmUudXBkYXRlKCgpID0+IHtcbiAgICByZXR1cm4geyBhY3RpdmVQYWdlOiBcInByYWN0aWNlXCIgfTtcbiAgfSk7XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICBpZiAodW5zdWJzY3JpYmVOYXYpIHtcbiAgICAgIHVuc3Vic2NyaWJlTmF2KCk7XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGgzLFxuICBsaSxcbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6IFwiRmlyYSBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAucHJhY3RpY2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5BcmVhcyBvZiBQcmFjdGljZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwicHJhY3RpY2UtY29udGFpbmVyXCIgaW46ZmFkZT17eyBkdXJhdGlvbjogNDAwLCBkZWxheTogMTAwIH19PlxuXG4gIDwhLS0gY2FyZCAxIC0tPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJ1ay1jYXJkIHVrLWNhcmQtZGVmYXVsdCB1ay1ncmlkLWNvbGxhcHNlIHVrLWNoaWxkLXdpZHRoLTEtMkBzXG4gICAgdWstbWFyZ2luIHVrLWJveC1zaGFkb3ctbWVkaXVtXCJcbiAgICB1ay1ncmlkPlxuICAgIDxkaXYgY2xhc3M9XCJ1ay1jYXJkLW1lZGlhLWxlZnQgdWstY292ZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2xhZHlqdXN0aWNlLmpwZ1wiIGFsdD1cIkxhZHkgSnVzdGljZVwiIHVrLWNvdmVyIC8+XG4gICAgICA8Y2FudmFzIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNDAwXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInVrLWNhcmQtYm9keVwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJ1ay1jYXJkLXRpdGxlXCI+QXJlYXMgb2YgUHJhY3RpY2U8L2gzPlxuICAgICAgICA8cD5PdXIgdGVhbSBzcGVjaWFsaXplcyBpbiB0aGUgZm9sbG93aW5nIGFyZWFzIG9mIHByYWN0aWNlOjwvcD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5BZ3JpY3VsdHVyYWwgTGF3PC9saT5cbiAgICAgICAgICA8bGk+QnVzaW5lc3MgTGF3PC9saT5cbiAgICAgICAgICA8bGk+RmFtaWx5IExhdzwvbGk+XG4gICAgICAgICAgPGxpPkNpdmlsIExpdGlnYXRpb248L2xpPlxuICAgICAgICAgIDxsaT5Fc3RhdGUgUGxhbm5pbmc8L2xpPlxuICAgICAgICAgIDxsaT5SZWFsIEVzdGF0ZTwvbGk+XG4gICAgICAgICAgPGxpPlRheCBQcmVwYXJhdGlvbiBhbmQgQWR2aWNlPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREE2QzJDLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXhDOUQsWUFBWTs7T0FFVixjQUFjLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVO0VBQ2xELFlBQVksR0FBRyxVQUFVOzs7Q0FHM0IsUUFBUSxDQUFDLE1BQU07V0FDSixVQUFVLEVBQUUsVUFBVTs7O0NBR2pDLFNBQVM7TUFDSCxjQUFjO0dBQ2hCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
