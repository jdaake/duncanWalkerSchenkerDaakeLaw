import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, n as navStore, o as onDestroy, v as validate_slots, f as fade, b as space, e as element, t as text, q as query_selector_all, c as detach_dev, g as claim_space, h as claim_element, j as children, k as claim_text, l as attr_dev, m as add_location, p as insert_dev, r as append_dev, u as noop, w as add_render_callback, x as create_in_transition } from './client.04ca95f5.js';
import { F as Footer } from './footer.25632ecc.js';

/* src/routes/practice.svelte generated by Svelte v3.24.1 */
const file = "src/routes/practice.svelte";

function create_fragment(ctx) {
	let t0;
	let div5;
	let div0;
	let img0;
	let img0_src_value;
	let t1;
	let div4;
	let div1;
	let img1;
	let img1_src_value;
	let t2;
	let canvas;
	let t3;
	let div3;
	let div2;
	let h3;
	let t4;
	let t5;
	let p;
	let t6;
	let t7;
	let ul;
	let li0;
	let t8;
	let t9;
	let li1;
	let t10;
	let t11;
	let li2;
	let t12;
	let t13;
	let li3;
	let t14;
	let t15;
	let li4;
	let t16;
	let t17;
	let li5;
	let t18;
	let t19;
	let li6;
	let t20;
	let div5_intro;

	const block = {
		c: function create() {
			t0 = space();
			div5 = element("div");
			div0 = element("div");
			img0 = element("img");
			t1 = space();
			div4 = element("div");
			div1 = element("div");
			img1 = element("img");
			t2 = space();
			canvas = element("canvas");
			t3 = space();
			div3 = element("div");
			div2 = element("div");
			h3 = element("h3");
			t4 = text("Areas of Practice");
			t5 = space();
			p = element("p");
			t6 = text("Our team specializes in the following areas of practice:");
			t7 = space();
			ul = element("ul");
			li0 = element("li");
			t8 = text("Agricultural Law");
			t9 = space();
			li1 = element("li");
			t10 = text("Business Law");
			t11 = space();
			li2 = element("li");
			t12 = text("Family Law");
			t13 = space();
			li3 = element("li");
			t14 = text("Civil Litigation");
			t15 = space();
			li4 = element("li");
			t16 = text("Estate Planning");
			t17 = space();
			li5 = element("li");
			t18 = text("Real Estate");
			t19 = space();
			li6 = element("li");
			t20 = text("Tax Preparation and Advice");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-v2ns25\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div0 = claim_element(div5_nodes, "DIV", {});
			var div0_nodes = children(div0);
			img0 = claim_element(div0_nodes, "IMG", { class: true, src: true, alt: true });
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true, "uk-grid": true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img1 = claim_element(div1_nodes, "IMG", { src: true, alt: true, "uk-cover": true });
			t2 = claim_space(div1_nodes);
			canvas = claim_element(div1_nodes, "CANVAS", { width: true, height: true });
			children(canvas).forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", {});
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h3 = claim_element(div2_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t4 = claim_text(h3_nodes, "Areas of Practice");
			h3_nodes.forEach(detach_dev);
			t5 = claim_space(div2_nodes);
			p = claim_element(div2_nodes, "P", { class: true });
			var p_nodes = children(p);
			t6 = claim_text(p_nodes, "Our team specializes in the following areas of practice:");
			p_nodes.forEach(detach_dev);
			t7 = claim_space(div2_nodes);
			ul = claim_element(div2_nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			t8 = claim_text(li0_nodes, "Agricultural Law");
			li0_nodes.forEach(detach_dev);
			t9 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			t10 = claim_text(li1_nodes, "Business Law");
			li1_nodes.forEach(detach_dev);
			t11 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			t12 = claim_text(li2_nodes, "Family Law");
			li2_nodes.forEach(detach_dev);
			t13 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", { class: true });
			var li3_nodes = children(li3);
			t14 = claim_text(li3_nodes, "Civil Litigation");
			li3_nodes.forEach(detach_dev);
			t15 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", { class: true });
			var li4_nodes = children(li4);
			t16 = claim_text(li4_nodes, "Estate Planning");
			li4_nodes.forEach(detach_dev);
			t17 = claim_space(ul_nodes);
			li5 = claim_element(ul_nodes, "LI", { class: true });
			var li5_nodes = children(li5);
			t18 = claim_text(li5_nodes, "Real Estate");
			li5_nodes.forEach(detach_dev);
			t19 = claim_space(ul_nodes);
			li6 = claim_element(ul_nodes, "LI", { class: true });
			var li6_nodes = children(li6);
			t20 = claim_text(li6_nodes, "Tax Preparation and Advice");
			li6_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Areas of Practice";
			attr_dev(img0, "class", "main-logo svelte-j3g105");
			if (img0.src !== (img0_src_value = "./images/logos/dwsdLogoColor.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "");
			add_location(img0, file, 53, 4, 1000);
			add_location(div0, file, 52, 2, 990);
			if (img1.src !== (img1_src_value = "./images/ladyjustice.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "Lady Justice");
			attr_dev(img1, "uk-cover", "");
			add_location(img1, file, 61, 6, 1290);
			attr_dev(canvas, "width", "500");
			attr_dev(canvas, "height", "400");
			add_location(canvas, file, 62, 6, 1363);
			attr_dev(div1, "class", "uk-card-media-left uk-cover-container");
			add_location(div1, file, 60, 4, 1232);
			attr_dev(h3, "class", "uk-card-title svelte-j3g105");
			add_location(h3, file, 66, 8, 1461);
			attr_dev(p, "class", "svelte-j3g105");
			add_location(p, file, 67, 8, 1518);
			attr_dev(li0, "class", "svelte-j3g105");
			add_location(li0, file, 69, 10, 1605);
			attr_dev(li1, "class", "svelte-j3g105");
			add_location(li1, file, 70, 10, 1641);
			attr_dev(li2, "class", "svelte-j3g105");
			add_location(li2, file, 71, 10, 1673);
			attr_dev(li3, "class", "svelte-j3g105");
			add_location(li3, file, 72, 10, 1703);
			attr_dev(li4, "class", "svelte-j3g105");
			add_location(li4, file, 73, 10, 1739);
			attr_dev(li5, "class", "svelte-j3g105");
			add_location(li5, file, 74, 10, 1774);
			attr_dev(li6, "class", "svelte-j3g105");
			add_location(li6, file, 75, 10, 1805);
			add_location(ul, file, 68, 8, 1590);
			attr_dev(div2, "class", "uk-card-body");
			add_location(div2, file, 65, 6, 1426);
			add_location(div3, file, 64, 4, 1414);
			attr_dev(div4, "class", "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\n    uk-margin uk-box-shadow-medium");
			attr_dev(div4, "uk-grid", "");
			add_location(div4, file, 56, 2, 1101);
			attr_dev(div5, "class", "practice-container svelte-j3g105");
			add_location(div5, file, 51, 0, 915);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div5, anchor);
			append_dev(div5, div0);
			append_dev(div0, img0);
			append_dev(div5, t1);
			append_dev(div5, div4);
			append_dev(div4, div1);
			append_dev(div1, img1);
			append_dev(div1, t2);
			append_dev(div1, canvas);
			append_dev(div4, t3);
			append_dev(div4, div3);
			append_dev(div3, div2);
			append_dev(div2, h3);
			append_dev(h3, t4);
			append_dev(div2, t5);
			append_dev(div2, p);
			append_dev(p, t6);
			append_dev(div2, t7);
			append_dev(div2, ul);
			append_dev(ul, li0);
			append_dev(li0, t8);
			append_dev(ul, t9);
			append_dev(ul, li1);
			append_dev(li1, t10);
			append_dev(ul, t11);
			append_dev(ul, li2);
			append_dev(li2, t12);
			append_dev(ul, t13);
			append_dev(ul, li3);
			append_dev(li3, t14);
			append_dev(ul, t15);
			append_dev(ul, li4);
			append_dev(li4, t16);
			append_dev(ul, t17);
			append_dev(ul, li5);
			append_dev(li5, t18);
			append_dev(ul, t19);
			append_dev(ul, li6);
			append_dev(li6, t20);
		},
		p: noop,
		i: function intro(local) {
			if (!div5_intro) {
				add_render_callback(() => {
					div5_intro = create_in_transition(div5, fade, { duration: 400, delay: 100 });
					div5_intro.start();
				});
			}
		},
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJhY3RpY2UuMTE2ODc0OTMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJhY3RpY2Uuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uRGVzdHJveSB9IGZyb20gXCJzdmVsdGVcIjtcbiAgaW1wb3J0IG5hdlN0b3JlIGZyb20gXCIuLi9zdG9yZXMvbmF2LXN0b3JlLmpzXCI7XG4gIGltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyLnN2ZWx0ZVwiO1xuICBpbXBvcnQgeyBmYWRlIH0gZnJvbSBcInN2ZWx0ZS90cmFuc2l0aW9uXCI7XG4gIGxldCBwYWdlSXNBY3RpdmU7XG5cbiAgY29uc3QgdW5zdWJzY3JpYmVOYXYgPSBuYXZTdG9yZS5zdWJzY3JpYmUoYWN0aXZlUGFnZSA9PiB7XG4gICAgcGFnZUlzQWN0aXZlID0gYWN0aXZlUGFnZTtcbiAgfSk7XG5cbiAgbmF2U3RvcmUudXBkYXRlKCgpID0+IHtcbiAgICByZXR1cm4geyBhY3RpdmVQYWdlOiBcInByYWN0aWNlXCIgfTtcbiAgfSk7XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICBpZiAodW5zdWJzY3JpYmVOYXYpIHtcbiAgICAgIHVuc3Vic2NyaWJlTmF2KCk7XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGgzLFxuICBsaSxcbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6IFwiRmlyYSBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAucHJhY3RpY2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICB9XG5cbiAgLm1haW4tbG9nbyB7XG4gICAgbWF4LXdpZHRoOiA1NzVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkFyZWFzIG9mIFByYWN0aWNlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJwcmFjdGljZS1jb250YWluZXJcIiBpbjpmYWRlPXt7IGR1cmF0aW9uOiA0MDAsIGRlbGF5OiAxMDAgfX0+XG4gIDxkaXY+XG4gICAgPGltZyBjbGFzcz1cIm1haW4tbG9nb1wiIHNyYz1cIi4vaW1hZ2VzL2xvZ29zL2R3c2RMb2dvQ29sb3IuanBnXCIgYWx0PVwiXCIgLz5cbiAgPC9kaXY+XG4gIDwhLS0gY2FyZCAxIC0tPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJ1ay1jYXJkIHVrLWNhcmQtZGVmYXVsdCB1ay1ncmlkLWNvbGxhcHNlIHVrLWNoaWxkLXdpZHRoLTEtMkBzXG4gICAgdWstbWFyZ2luIHVrLWJveC1zaGFkb3ctbWVkaXVtXCJcbiAgICB1ay1ncmlkPlxuICAgIDxkaXYgY2xhc3M9XCJ1ay1jYXJkLW1lZGlhLWxlZnQgdWstY292ZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2xhZHlqdXN0aWNlLmpwZ1wiIGFsdD1cIkxhZHkgSnVzdGljZVwiIHVrLWNvdmVyIC8+XG4gICAgICA8Y2FudmFzIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNDAwXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInVrLWNhcmQtYm9keVwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJ1ay1jYXJkLXRpdGxlXCI+QXJlYXMgb2YgUHJhY3RpY2U8L2gzPlxuICAgICAgICA8cD5PdXIgdGVhbSBzcGVjaWFsaXplcyBpbiB0aGUgZm9sbG93aW5nIGFyZWFzIG9mIHByYWN0aWNlOjwvcD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5BZ3JpY3VsdHVyYWwgTGF3PC9saT5cbiAgICAgICAgICA8bGk+QnVzaW5lc3MgTGF3PC9saT5cbiAgICAgICAgICA8bGk+RmFtaWx5IExhdzwvbGk+XG4gICAgICAgICAgPGxpPkNpdmlsIExpdGlnYXRpb248L2xpPlxuICAgICAgICAgIDxsaT5Fc3RhdGUgUGxhbm5pbmc8L2xpPlxuICAgICAgICAgIDxsaT5SZWFsIEVzdGF0ZTwvbGk+XG4gICAgICAgICAgPGxpPlRheCBQcmVwYXJhdGlvbiBhbmQgQWR2aWNlPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQW1EMkMsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBOUM5RCxZQUFZOztPQUVWLGNBQWMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVU7RUFDbEQsWUFBWSxHQUFHLFVBQVU7OztDQUczQixRQUFRLENBQUMsTUFBTTtXQUNKLFVBQVUsRUFBRSxVQUFVOzs7Q0FHakMsU0FBUztNQUNILGNBQWM7R0FDaEIsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==