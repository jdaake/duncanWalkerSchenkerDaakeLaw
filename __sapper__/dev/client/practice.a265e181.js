import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, n as navStore, o as onDestroy, v as validate_slots, b as space, e as element, t as text, q as query_selector_all, c as detach_dev, g as claim_space, h as claim_element, j as children, k as claim_text, l as attr_dev, m as add_location, p as insert_dev, r as append_dev, u as noop, w as add_render_callback, x as create_in_transition } from './client.839e36af.js';
import { F as Footer } from './footer.aa8c6a31.js';

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
	let ul;
	let li0;
	let t6;
	let t7;
	let li1;
	let t8;
	let t9;
	let li2;
	let t10;
	let t11;
	let li3;
	let t12;
	let t13;
	let li4;
	let t14;
	let t15;
	let li5;
	let t16;
	let t17;
	let li6;
	let t18;
	let div5_intro;
	let t19;
	let div6;

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
			t4 = text("Our Practice");
			t5 = space();
			ul = element("ul");
			li0 = element("li");
			t6 = text("Agricultural Law");
			t7 = space();
			li1 = element("li");
			t8 = text("Business Law");
			t9 = space();
			li2 = element("li");
			t10 = text("Family Law");
			t11 = space();
			li3 = element("li");
			t12 = text("Civil Litigation");
			t13 = space();
			li4 = element("li");
			t14 = text("Estate Planning");
			t15 = space();
			li5 = element("li");
			t16 = text("Real Estate");
			t17 = space();
			li6 = element("li");
			t18 = text("Tax Preparation and Advice");
			t19 = space();
			div6 = element("div");
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
			t4 = claim_text(h3_nodes, "Our Practice");
			h3_nodes.forEach(detach_dev);
			t5 = claim_space(div2_nodes);
			ul = claim_element(div2_nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t6 = claim_text(li0_nodes, "Agricultural Law");
			li0_nodes.forEach(detach_dev);
			t7 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t8 = claim_text(li1_nodes, "Business Law");
			li1_nodes.forEach(detach_dev);
			t9 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t10 = claim_text(li2_nodes, "Family Law");
			li2_nodes.forEach(detach_dev);
			t11 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			t12 = claim_text(li3_nodes, "Civil Litigation");
			li3_nodes.forEach(detach_dev);
			t13 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", {});
			var li4_nodes = children(li4);
			t14 = claim_text(li4_nodes, "Estate Planning");
			li4_nodes.forEach(detach_dev);
			t15 = claim_space(ul_nodes);
			li5 = claim_element(ul_nodes, "LI", {});
			var li5_nodes = children(li5);
			t16 = claim_text(li5_nodes, "Real Estate");
			li5_nodes.forEach(detach_dev);
			t17 = claim_space(ul_nodes);
			li6 = claim_element(ul_nodes, "LI", {});
			var li6_nodes = children(li6);
			t18 = claim_text(li6_nodes, "Tax Preparation and Advice");
			li6_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t19 = claim_space(nodes);
			div6 = claim_element(nodes, "DIV", { class: true });
			children(div6).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Areas of Practice";
			attr_dev(img0, "class", "main-logo");
			if (img0.src !== (img0_src_value = "./images/logos/dwsdLogoColor.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "");
			add_location(img0, file, 38, 4, 767);
			add_location(div0, file, 37, 2, 757);
			if (img1.src !== (img1_src_value = "./images/ladyjustice.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "Lady Justice");
			attr_dev(img1, "uk-cover", "");
			add_location(img1, file, 46, 6, 1057);
			attr_dev(canvas, "width", "400");
			attr_dev(canvas, "height", "300");
			add_location(canvas, file, 47, 6, 1130);
			attr_dev(div1, "class", "uk-card-media-left uk-cover-container");
			add_location(div1, file, 45, 4, 999);
			attr_dev(h3, "class", "uk-card-title");
			add_location(h3, file, 51, 8, 1228);
			add_location(li0, file, 54, 10, 1296);
			add_location(li1, file, 55, 10, 1332);
			add_location(li2, file, 56, 10, 1364);
			add_location(li3, file, 57, 10, 1394);
			add_location(li4, file, 58, 10, 1430);
			add_location(li5, file, 59, 10, 1465);
			add_location(li6, file, 60, 10, 1496);
			add_location(ul, file, 53, 8, 1281);
			attr_dev(div2, "class", "uk-card-body");
			add_location(div2, file, 50, 6, 1193);
			add_location(div3, file, 49, 4, 1181);
			attr_dev(div4, "class", "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\n    uk-margin uk-box-shadow-medium");
			attr_dev(div4, "uk-grid", "");
			add_location(div4, file, 41, 2, 868);
			attr_dev(div5, "class", "home-container");
			add_location(div5, file, 36, 0, 686);
			attr_dev(div6, "class", "practice-container svelte-15nyxbd");
			add_location(div6, file, 67, 0, 1587);
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
			append_dev(div2, ul);
			append_dev(ul, li0);
			append_dev(li0, t6);
			append_dev(ul, t7);
			append_dev(ul, li1);
			append_dev(li1, t8);
			append_dev(ul, t9);
			append_dev(ul, li2);
			append_dev(li2, t10);
			append_dev(ul, t11);
			append_dev(ul, li3);
			append_dev(li3, t12);
			append_dev(ul, t13);
			append_dev(ul, li4);
			append_dev(li4, t14);
			append_dev(ul, t15);
			append_dev(ul, li5);
			append_dev(li5, t16);
			append_dev(ul, t17);
			append_dev(ul, li6);
			append_dev(li6, t18);
			insert_dev(target, t19, anchor);
			insert_dev(target, div6, anchor);
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
			if (detaching) detach_dev(t19);
			if (detaching) detach_dev(div6);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJhY3RpY2UuYTI2NWUxODEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJhY3RpY2Uuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uRGVzdHJveSB9IGZyb20gXCJzdmVsdGVcIjtcbiAgaW1wb3J0IG5hdlN0b3JlIGZyb20gXCIuLi9zdG9yZXMvbmF2LXN0b3JlLmpzXCI7XG4gIGltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyLnN2ZWx0ZVwiO1xuICBsZXQgcGFnZUlzQWN0aXZlO1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlTmF2ID0gbmF2U3RvcmUuc3Vic2NyaWJlKGFjdGl2ZVBhZ2UgPT4ge1xuICAgIHBhZ2VJc0FjdGl2ZSA9IGFjdGl2ZVBhZ2U7XG4gIH0pO1xuXG4gIG5hdlN0b3JlLnVwZGF0ZSgoKSA9PiB7XG4gICAgcmV0dXJuIHsgYWN0aXZlUGFnZTogXCJwcmFjdGljZVwiIH07XG4gIH0pO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgaWYgKHVuc3Vic2NyaWJlTmF2KSB7XG4gICAgICB1bnN1YnNjcmliZU5hdigpO1xuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAucHJhY3RpY2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5BcmVhcyBvZiBQcmFjdGljZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiaG9tZS1jb250YWluZXJcIiBpbjpmYWRlPXt7IGR1cmF0aW9uOiA0MDAsIGRlbGF5OiAxMDAgfX0+XG4gIDxkaXY+XG4gICAgPGltZyBjbGFzcz1cIm1haW4tbG9nb1wiIHNyYz1cIi4vaW1hZ2VzL2xvZ29zL2R3c2RMb2dvQ29sb3IuanBnXCIgYWx0PVwiXCIgLz5cbiAgPC9kaXY+XG4gIDwhLS0gY2FyZCAxIC0tPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJ1ay1jYXJkIHVrLWNhcmQtZGVmYXVsdCB1ay1ncmlkLWNvbGxhcHNlIHVrLWNoaWxkLXdpZHRoLTEtMkBzXG4gICAgdWstbWFyZ2luIHVrLWJveC1zaGFkb3ctbWVkaXVtXCJcbiAgICB1ay1ncmlkPlxuICAgIDxkaXYgY2xhc3M9XCJ1ay1jYXJkLW1lZGlhLWxlZnQgdWstY292ZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2xhZHlqdXN0aWNlLmpwZ1wiIGFsdD1cIkxhZHkgSnVzdGljZVwiIHVrLWNvdmVyIC8+XG4gICAgICA8Y2FudmFzIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiMzAwXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInVrLWNhcmQtYm9keVwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJ1ay1jYXJkLXRpdGxlXCI+T3VyIFByYWN0aWNlPC9oMz5cblxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkFncmljdWx0dXJhbCBMYXc8L2xpPlxuICAgICAgICAgIDxsaT5CdXNpbmVzcyBMYXc8L2xpPlxuICAgICAgICAgIDxsaT5GYW1pbHkgTGF3PC9saT5cbiAgICAgICAgICA8bGk+Q2l2aWwgTGl0aWdhdGlvbjwvbGk+XG4gICAgICAgICAgPGxpPkVzdGF0ZSBQbGFubmluZzwvbGk+XG4gICAgICAgICAgPGxpPlJlYWwgRXN0YXRlPC9saT5cbiAgICAgICAgICA8bGk+VGF4IFByZXBhcmF0aW9uIGFuZCBBZHZpY2U8L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJwcmFjdGljZS1jb250YWluZXJcIiAvPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQW9DdUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FoQzFELFlBQVk7O09BRVYsY0FBYyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVTtFQUNsRCxZQUFZLEdBQUcsVUFBVTs7O0NBRzNCLFFBQVEsQ0FBQyxNQUFNO1dBQ0osVUFBVSxFQUFFLFVBQVU7OztDQUdqQyxTQUFTO01BQ0gsY0FBYztHQUNoQixjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
