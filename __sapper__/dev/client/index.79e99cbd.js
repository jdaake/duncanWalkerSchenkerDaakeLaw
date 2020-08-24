import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, n as navStore, o as onDestroy, v as validate_slots, f as fade, a as onMount, F as Footer, b as space, e as element, t as text, q as query_selector_all, c as detach_dev, g as claim_space, h as claim_element, j as children, k as claim_text, l as attr_dev, m as add_location, p as insert_dev, r as append_dev, u as noop, w as add_render_callback, x as create_in_transition } from './client.60c5c7b8.js';

/* src/routes/index.svelte generated by Svelte v3.24.1 */
const file = "src/routes/index.svelte";

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
	let p0;
	let t6;
	let t7;
	let p1;
	let t8;
	let t9;
	let p2;
	let t10;
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
			t4 = text("Our Practice");
			t5 = space();
			p0 = element("p");
			t6 = text("Duncan, Walker, Schenker & Daake, P.C., L.L.O. represents individuals,\n          families, farmers, banks, and small businesses. With our extensive\n          experience, our practice has developed into a comprehensive law firm\n          handling an assortment of legal issues.");
			t7 = space();
			p1 = element("p");
			t8 = text("Our respective backgrounds allow us to meet the often complex and\n          interdisciplinary needs of our local citizens as a team. Our clients'\n          interests are at the heart of everything we do, and we place a strong\n          emphasis on professionalism in serving the needs of our fellow South\n          Central Nebraskans.");
			t9 = space();
			p2 = element("p");
			t10 = text("We are grateful for our community, our clients, and friends and\n          welcome the opportunity to assist you with your particular situation.\n          Feel free to stop by or call to discuss your legal needs.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-dzbgvx\"]", document.head);
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
			p0 = claim_element(div2_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t6 = claim_text(p0_nodes, "Duncan, Walker, Schenker & Daake, P.C., L.L.O. represents individuals,\n          families, farmers, banks, and small businesses. With our extensive\n          experience, our practice has developed into a comprehensive law firm\n          handling an assortment of legal issues.");
			p0_nodes.forEach(detach_dev);
			t7 = claim_space(div2_nodes);
			p1 = claim_element(div2_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t8 = claim_text(p1_nodes, "Our respective backgrounds allow us to meet the often complex and\n          interdisciplinary needs of our local citizens as a team. Our clients'\n          interests are at the heart of everything we do, and we place a strong\n          emphasis on professionalism in serving the needs of our fellow South\n          Central Nebraskans.");
			p1_nodes.forEach(detach_dev);
			t9 = claim_space(div2_nodes);
			p2 = claim_element(div2_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t10 = claim_text(p2_nodes, "We are grateful for our community, our clients, and friends and\n          welcome the opportunity to assist you with your particular situation.\n          Feel free to stop by or call to discuss your legal needs.");
			p2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Duncan, Walker, Schenker, & Daake";
			attr_dev(img0, "class", "main-logo svelte-mj206k");
			if (img0.src !== (img0_src_value = "./images/logos/dwsdLogoColor.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "");
			add_location(img0, file, 68, 4, 1243);
			add_location(div0, file, 67, 2, 1233);
			if (img1.src !== (img1_src_value = "./images/ladyjustice.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "Lady Justice");
			attr_dev(img1, "uk-cover", "");
			add_location(img1, file, 76, 6, 1533);
			attr_dev(canvas, "width", "400");
			attr_dev(canvas, "height", "300");
			add_location(canvas, file, 77, 6, 1606);
			attr_dev(div1, "class", "uk-card-media-left uk-cover-container");
			add_location(div1, file, 75, 4, 1475);
			attr_dev(h3, "class", "uk-card-title svelte-mj206k");
			add_location(h3, file, 81, 8, 1704);
			attr_dev(p0, "class", "svelte-mj206k");
			add_location(p0, file, 82, 8, 1756);
			attr_dev(p1, "class", "svelte-mj206k");
			add_location(p1, file, 88, 8, 2068);
			attr_dev(p2, "class", "svelte-mj206k");
			add_location(p2, file, 95, 8, 2438);
			attr_dev(div2, "class", "uk-card-body");
			add_location(div2, file, 80, 6, 1669);
			add_location(div3, file, 79, 4, 1657);
			attr_dev(div4, "class", "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\n    uk-margin uk-box-shadow-medium svelte-mj206k");
			attr_dev(div4, "uk-grid", "");
			add_location(div4, file, 71, 2, 1344);
			attr_dev(div5, "class", "home-container svelte-mj206k");
			add_location(div5, file, 66, 0, 1162);
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
			append_dev(div2, p0);
			append_dev(p0, t6);
			append_dev(div2, t7);
			append_dev(div2, p1);
			append_dev(p1, t8);
			append_dev(div2, t9);
			append_dev(div2, p2);
			append_dev(p2, t10);
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
		return { activePage: "home" };
	});

	onDestroy(() => {
		if (unsubscribeNav) {
			unsubscribeNav();
		}
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);

	$$self.$capture_state = () => ({
		fade,
		onMount,
		onDestroy,
		Footer,
		navStore,
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

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzllOTljYmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGZhZGUgfSBmcm9tIFwic3ZlbHRlL3RyYW5zaXRpb25cIjtcbiAgaW1wb3J0IHsgb25Nb3VudCwgb25EZXN0cm95IH0gZnJvbSBcInN2ZWx0ZVwiO1xuICBpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci5zdmVsdGVcIjtcbiAgaW1wb3J0IG5hdlN0b3JlIGZyb20gXCIuLi9zdG9yZXMvbmF2LXN0b3JlLmpzXCI7XG4gIGxldCBwYWdlSXNBY3RpdmU7XG5cbiAgY29uc3QgdW5zdWJzY3JpYmVOYXYgPSBuYXZTdG9yZS5zdWJzY3JpYmUoYWN0aXZlUGFnZSA9PiB7XG4gICAgcGFnZUlzQWN0aXZlID0gYWN0aXZlUGFnZTtcbiAgfSk7XG5cbiAgbmF2U3RvcmUudXBkYXRlKCgpID0+IHtcbiAgICByZXR1cm4geyBhY3RpdmVQYWdlOiBcImhvbWVcIiB9O1xuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGlmICh1bnN1YnNjcmliZU5hdikge1xuICAgICAgdW5zdWJzY3JpYmVOYXYoKTtcbiAgICB9XG4gIH0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgaDMsXG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZpcmEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5ob21lLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogODB2dztcbiAgfVxuXG4gIC51ay1jYXJkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWFpbi1sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDU3NXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIC5tYWluLWxvZ28ge1xuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3OC45OHB4KSB7XG4gICAgLm1haW4tbG9nbyB7XG4gICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkR1bmNhbiwgV2Fsa2VyLCBTY2hlbmtlciwgJiBEYWFrZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiaG9tZS1jb250YWluZXJcIiBpbjpmYWRlPXt7IGR1cmF0aW9uOiA0MDAsIGRlbGF5OiAxMDAgfX0+XG4gIDxkaXY+XG4gICAgPGltZyBjbGFzcz1cIm1haW4tbG9nb1wiIHNyYz1cIi4vaW1hZ2VzL2xvZ29zL2R3c2RMb2dvQ29sb3IuanBnXCIgYWx0PVwiXCIgLz5cbiAgPC9kaXY+XG4gIDwhLS0gY2FyZCAxIC0tPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJ1ay1jYXJkIHVrLWNhcmQtZGVmYXVsdCB1ay1ncmlkLWNvbGxhcHNlIHVrLWNoaWxkLXdpZHRoLTEtMkBzXG4gICAgdWstbWFyZ2luIHVrLWJveC1zaGFkb3ctbWVkaXVtXCJcbiAgICB1ay1ncmlkPlxuICAgIDxkaXYgY2xhc3M9XCJ1ay1jYXJkLW1lZGlhLWxlZnQgdWstY292ZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2xhZHlqdXN0aWNlLmpwZ1wiIGFsdD1cIkxhZHkgSnVzdGljZVwiIHVrLWNvdmVyIC8+XG4gICAgICA8Y2FudmFzIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiMzAwXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInVrLWNhcmQtYm9keVwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJ1ay1jYXJkLXRpdGxlXCI+T3VyIFByYWN0aWNlPC9oMz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRHVuY2FuLCBXYWxrZXIsIFNjaGVua2VyICYgRGFha2UsIFAuQy4sIEwuTC5PLiByZXByZXNlbnRzIGluZGl2aWR1YWxzLFxuICAgICAgICAgIGZhbWlsaWVzLCBmYXJtZXJzLCBiYW5rcywgYW5kIHNtYWxsIGJ1c2luZXNzZXMuIFdpdGggb3VyIGV4dGVuc2l2ZVxuICAgICAgICAgIGV4cGVyaWVuY2UsIG91ciBwcmFjdGljZSBoYXMgZGV2ZWxvcGVkIGludG8gYSBjb21wcmVoZW5zaXZlIGxhdyBmaXJtXG4gICAgICAgICAgaGFuZGxpbmcgYW4gYXNzb3J0bWVudCBvZiBsZWdhbCBpc3N1ZXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT3VyIHJlc3BlY3RpdmUgYmFja2dyb3VuZHMgYWxsb3cgdXMgdG8gbWVldCB0aGUgb2Z0ZW4gY29tcGxleCBhbmRcbiAgICAgICAgICBpbnRlcmRpc2NpcGxpbmFyeSBuZWVkcyBvZiBvdXIgbG9jYWwgY2l0aXplbnMgYXMgYSB0ZWFtLiBPdXIgY2xpZW50cydcbiAgICAgICAgICBpbnRlcmVzdHMgYXJlIGF0IHRoZSBoZWFydCBvZiBldmVyeXRoaW5nIHdlIGRvLCBhbmQgd2UgcGxhY2UgYSBzdHJvbmdcbiAgICAgICAgICBlbXBoYXNpcyBvbiBwcm9mZXNzaW9uYWxpc20gaW4gc2VydmluZyB0aGUgbmVlZHMgb2Ygb3VyIGZlbGxvdyBTb3V0aFxuICAgICAgICAgIENlbnRyYWwgTmVicmFza2Fucy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBhcmUgZ3JhdGVmdWwgZm9yIG91ciBjb21tdW5pdHksIG91ciBjbGllbnRzLCBhbmQgZnJpZW5kcyBhbmRcbiAgICAgICAgICB3ZWxjb21lIHRoZSBvcHBvcnR1bml0eSB0byBhc3Npc3QgeW91IHdpdGggeW91ciBwYXJ0aWN1bGFyIHNpdHVhdGlvbi5cbiAgICAgICAgICBGZWVsIGZyZWUgdG8gc3RvcCBieSBvciBjYWxsIHRvIGRpc2N1c3MgeW91ciBsZWdhbCBuZWVkcy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFrRXVDLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTdEMUQsWUFBWTs7T0FFVixjQUFjLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVO0VBQ2xELFlBQVksR0FBRyxVQUFVOzs7Q0FHM0IsUUFBUSxDQUFDLE1BQU07V0FDSixVQUFVLEVBQUUsTUFBTTs7O0NBRzdCLFNBQVM7TUFDSCxjQUFjO0dBQ2hCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
