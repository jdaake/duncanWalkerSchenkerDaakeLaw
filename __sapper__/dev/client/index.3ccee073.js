import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, F as Footer, v as validate_slots, e as element, a as space, t as text, c as create_component, b as claim_element, f as children, g as claim_space, h as detach_dev, j as claim_text, k as claim_component, l as attr_dev, m as add_location, n as insert_dev, o as append_dev, p as mount_component, q as noop, r as add_render_callback, u as create_in_transition, w as transition_in, x as transition_out, y as destroy_component } from './client.74bf9df4.js';
import { f as fade } from './index.fb0acf03.js';

/* src/routes/index.svelte generated by Svelte v3.24.1 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
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
	let t2;
	let t3;
	let p0;
	let t4;
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
	let t8;
	let t9;
	let p1;
	let t10;
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
	let t14;
	let t15;
	let p2;
	let t16;
	let div12_intro;
	let t17;
	let footer;
	let current;
	footer = new Footer({ $$inline: true });

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
			t2 = text("Our Firm");
			t3 = space();
			p0 = element("p");
			t4 = text("Duncan, Walker, Schenker & Daake, P.C., L.L.O. represents individuals,\n          families, farmers, banks, and small businesses. With our extensive\n          experience, our practice has developed into a comprehensive law firm\n          handling an assortment of legal issues.");
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
			t8 = text("A Client First Approach");
			t9 = space();
			p1 = element("p");
			t10 = text("Our background in law allows us to meet the often complex and\n          interdisciplinary needs of our local citizens. Our clients' interests\n          are at the heart of everything we do. We place a strong emphasis on\n          professionalism and serving the needs of the residents of South\n          Central Nebraska.");
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
			t14 = text("Here When You Need Us");
			t15 = space();
			p2 = element("p");
			t16 = text("We are grateful for our communities, our clients, and friends and\n          welcome the opportunity to assist you with your particular legal\n          situation. Feel free to stop by or call to discuss your legal needs.");
			t17 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div12 = claim_element(nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			div3 = claim_element(div12_nodes, "DIV", { class: true, "uk-grid": true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img0 = claim_element(div0_nodes, "IMG", { src: true, alt: true, "uk-cover": true });
			t0 = claim_space(div0_nodes);
			canvas0 = claim_element(div0_nodes, "CANVAS", { width: true, height: true });
			children(canvas0).forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h30 = claim_element(div1_nodes, "H3", { class: true });
			var h30_nodes = children(h30);
			t2 = claim_text(h30_nodes, "Our Firm");
			h30_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			p0 = claim_element(div1_nodes, "P", {});
			var p0_nodes = children(p0);
			t4 = claim_text(p0_nodes, "Duncan, Walker, Schenker & Daake, P.C., L.L.O. represents individuals,\n          families, farmers, banks, and small businesses. With our extensive\n          experience, our practice has developed into a comprehensive law firm\n          handling an assortment of legal issues.");
			p0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t5 = claim_space(div12_nodes);
			div7 = claim_element(div12_nodes, "DIV", { class: true, "uk-grid": true });
			var div7_nodes = children(div7);
			div4 = claim_element(div7_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			img1 = claim_element(div4_nodes, "IMG", { src: true, alt: true, "uk-cover": true });
			t6 = claim_space(div4_nodes);
			canvas1 = claim_element(div4_nodes, "CANVAS", { width: true, height: true });
			children(canvas1).forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t7 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", {});
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			h31 = claim_element(div5_nodes, "H3", { class: true });
			var h31_nodes = children(h31);
			t8 = claim_text(h31_nodes, "A Client First Approach");
			h31_nodes.forEach(detach_dev);
			t9 = claim_space(div5_nodes);
			p1 = claim_element(div5_nodes, "P", {});
			var p1_nodes = children(p1);
			t10 = claim_text(p1_nodes, "Our background in law allows us to meet the often complex and\n          interdisciplinary needs of our local citizens. Our clients' interests\n          are at the heart of everything we do. We place a strong emphasis on\n          professionalism and serving the needs of the residents of South\n          Central Nebraska.");
			p1_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			t11 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { class: true, "uk-grid": true });
			var div11_nodes = children(div11);
			div8 = claim_element(div11_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			img2 = claim_element(div8_nodes, "IMG", { src: true, alt: true, "uk-cover": true });
			t12 = claim_space(div8_nodes);
			canvas2 = claim_element(div8_nodes, "CANVAS", { width: true, height: true });
			children(canvas2).forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			t13 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", {});
			var div10_nodes = children(div10);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			h32 = claim_element(div9_nodes, "H3", { class: true });
			var h32_nodes = children(h32);
			t14 = claim_text(h32_nodes, "Here When You Need Us");
			h32_nodes.forEach(detach_dev);
			t15 = claim_space(div9_nodes);
			p2 = claim_element(div9_nodes, "P", {});
			var p2_nodes = children(p2);
			t16 = claim_text(p2_nodes, "We are grateful for our communities, our clients, and friends and\n          welcome the opportunity to assist you with your particular legal\n          situation. Feel free to stop by or call to discuss your legal needs.");
			p2_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			t17 = claim_space(nodes);
			claim_component(footer.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			if (img0.src !== (img0_src_value = "./images/farming.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "Farming");
			attr_dev(img0, "uk-cover", "");
			add_location(img0, file, 21, 6, 512);
			attr_dev(canvas0, "width", "450");
			attr_dev(canvas0, "height", "250");
			add_location(canvas0, file, 22, 6, 576);
			attr_dev(div0, "class", "uk-card-media-left uk-cover-container");
			add_location(div0, file, 20, 4, 454);
			attr_dev(h30, "class", "uk-card-title");
			add_location(h30, file, 26, 8, 674);
			add_location(p0, file, 27, 8, 722);
			attr_dev(div1, "class", "uk-card-body");
			add_location(div1, file, 25, 6, 639);
			add_location(div2, file, 24, 4, 627);
			attr_dev(div3, "class", "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\n    uk-margin");
			attr_dev(div3, "uk-grid", "");
			add_location(div3, file, 16, 2, 344);
			if (img1.src !== (img1_src_value = "./images/ladyJustice.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "");
			attr_dev(img1, "uk-cover", "");
			add_location(img1, file, 42, 6, 1263);
			attr_dev(canvas1, "width", "450");
			attr_dev(canvas1, "height", "250");
			add_location(canvas1, file, 43, 6, 1324);
			attr_dev(div4, "class", "uk-flex-last@s uk-card-media-right uk-cover-container");
			add_location(div4, file, 41, 4, 1189);
			attr_dev(h31, "class", "uk-card-title");
			add_location(h31, file, 47, 8, 1422);
			add_location(p1, file, 48, 8, 1485);
			attr_dev(div5, "class", "uk-card-body");
			add_location(div5, file, 46, 6, 1387);
			add_location(div6, file, 45, 4, 1375);
			attr_dev(div7, "class", "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\n    uk-margin");
			attr_dev(div7, "uk-grid", "");
			add_location(div7, file, 37, 2, 1079);
			if (img2.src !== (img2_src_value = "./images/mainStreet.jpg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "Main Street");
			attr_dev(img2, "uk-cover", "");
			add_location(img2, file, 64, 6, 2055);
			attr_dev(canvas2, "width", "450");
			attr_dev(canvas2, "height", "250");
			add_location(canvas2, file, 65, 6, 2126);
			attr_dev(div8, "class", "uk-card-media-left uk-cover-container");
			add_location(div8, file, 63, 4, 1997);
			attr_dev(h32, "class", "uk-card-title");
			add_location(h32, file, 69, 8, 2224);
			add_location(p2, file, 70, 8, 2285);
			attr_dev(div9, "class", "uk-card-body");
			add_location(div9, file, 68, 6, 2189);
			add_location(div10, file, 67, 4, 2177);
			attr_dev(div11, "class", "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\n    uk-margin");
			attr_dev(div11, "uk-grid", "");
			add_location(div11, file, 59, 2, 1887);
			attr_dev(div12, "class", "home-container svelte-vcel0i");
			add_location(div12, file, 13, 0, 220);
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
			append_dev(h30, t2);
			append_dev(div1, t3);
			append_dev(div1, p0);
			append_dev(p0, t4);
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
			append_dev(h31, t8);
			append_dev(div5, t9);
			append_dev(div5, p1);
			append_dev(p1, t10);
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
			append_dev(h32, t14);
			append_dev(div9, t15);
			append_dev(div9, p2);
			append_dev(p2, t16);
			insert_dev(target, t17, anchor);
			mount_component(footer, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			if (!div12_intro) {
				add_render_callback(() => {
					div12_intro = create_in_transition(div12, fade, { duration: 400, delay: 200 });
					div12_intro.start();
				});
			}

			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div12);
			if (detaching) detach_dev(t17);
			destroy_component(footer, detaching);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	$$self.$capture_state = () => ({ fade, Footer });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguM2NjZWUwNzMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGZhZGUgfSBmcm9tIFwic3ZlbHRlL3RyYW5zaXRpb25cIjtcbiAgaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXIuc3ZlbHRlXCI7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuaG9tZS1jb250YWluZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDgwdnc7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJob21lLWNvbnRhaW5lclwiIGluOmZhZGU9e3sgZHVyYXRpb246IDQwMCwgZGVsYXk6IDIwMCB9fT5cbiAgPCEtLSB0aHJlZSBjYXJkcyB3aXRoIGltYWdlcyAtLT5cbiAgPCEtLSBjYXJkIDEgLS0+XG4gIDxkaXZcbiAgICBjbGFzcz1cInVrLWNhcmQgdWstY2FyZC1kZWZhdWx0IHVrLWdyaWQtY29sbGFwc2UgdWstY2hpbGQtd2lkdGgtMS0yQHNcbiAgICB1ay1tYXJnaW5cIlxuICAgIHVrLWdyaWQ+XG4gICAgPGRpdiBjbGFzcz1cInVrLWNhcmQtbWVkaWEtbGVmdCB1ay1jb3Zlci1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvZmFybWluZy5qcGdcIiBhbHQ9XCJGYXJtaW5nXCIgdWstY292ZXIgLz5cbiAgICAgIDxjYW52YXMgd2lkdGg9XCI0NTBcIiBoZWlnaHQ9XCIyNTBcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidWstY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoMyBjbGFzcz1cInVrLWNhcmQtdGl0bGVcIj5PdXIgRmlybTwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIER1bmNhbiwgV2Fsa2VyLCBTY2hlbmtlciAmIERhYWtlLCBQLkMuLCBMLkwuTy4gcmVwcmVzZW50cyBpbmRpdmlkdWFscyxcbiAgICAgICAgICBmYW1pbGllcywgZmFybWVycywgYmFua3MsIGFuZCBzbWFsbCBidXNpbmVzc2VzLiBXaXRoIG91ciBleHRlbnNpdmVcbiAgICAgICAgICBleHBlcmllbmNlLCBvdXIgcHJhY3RpY2UgaGFzIGRldmVsb3BlZCBpbnRvIGEgY29tcHJlaGVuc2l2ZSBsYXcgZmlybVxuICAgICAgICAgIGhhbmRsaW5nIGFuIGFzc29ydG1lbnQgb2YgbGVnYWwgaXNzdWVzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwhLS0gY2FyZCAyIC0tPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJ1ay1jYXJkIHVrLWNhcmQtZGVmYXVsdCB1ay1ncmlkLWNvbGxhcHNlIHVrLWNoaWxkLXdpZHRoLTEtMkBzXG4gICAgdWstbWFyZ2luXCJcbiAgICB1ay1ncmlkPlxuICAgIDxkaXYgY2xhc3M9XCJ1ay1mbGV4LWxhc3RAcyB1ay1jYXJkLW1lZGlhLXJpZ2h0IHVrLWNvdmVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9sYWR5SnVzdGljZS5qcGdcIiBhbHQ9XCJcIiB1ay1jb3ZlciAvPlxuICAgICAgPGNhbnZhcyB3aWR0aD1cIjQ1MFwiIGhlaWdodD1cIjI1MFwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1ay1jYXJkLWJvZHlcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwidWstY2FyZC10aXRsZVwiPkEgQ2xpZW50IEZpcnN0IEFwcHJvYWNoPC9oMz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT3VyIGJhY2tncm91bmQgaW4gbGF3IGFsbG93cyB1cyB0byBtZWV0IHRoZSBvZnRlbiBjb21wbGV4IGFuZFxuICAgICAgICAgIGludGVyZGlzY2lwbGluYXJ5IG5lZWRzIG9mIG91ciBsb2NhbCBjaXRpemVucy4gT3VyIGNsaWVudHMnIGludGVyZXN0c1xuICAgICAgICAgIGFyZSBhdCB0aGUgaGVhcnQgb2YgZXZlcnl0aGluZyB3ZSBkby4gV2UgcGxhY2UgYSBzdHJvbmcgZW1waGFzaXMgb25cbiAgICAgICAgICBwcm9mZXNzaW9uYWxpc20gYW5kIHNlcnZpbmcgdGhlIG5lZWRzIG9mIHRoZSByZXNpZGVudHMgb2YgU291dGhcbiAgICAgICAgICBDZW50cmFsIE5lYnJhc2thLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwhLS0gY2FyZCAzIC0tPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJ1ay1jYXJkIHVrLWNhcmQtZGVmYXVsdCB1ay1ncmlkLWNvbGxhcHNlIHVrLWNoaWxkLXdpZHRoLTEtMkBzXG4gICAgdWstbWFyZ2luXCJcbiAgICB1ay1ncmlkPlxuICAgIDxkaXYgY2xhc3M9XCJ1ay1jYXJkLW1lZGlhLWxlZnQgdWstY292ZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL21haW5TdHJlZXQuanBnXCIgYWx0PVwiTWFpbiBTdHJlZXRcIiB1ay1jb3ZlciAvPlxuICAgICAgPGNhbnZhcyB3aWR0aD1cIjQ1MFwiIGhlaWdodD1cIjI1MFwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1ay1jYXJkLWJvZHlcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwidWstY2FyZC10aXRsZVwiPkhlcmUgV2hlbiBZb3UgTmVlZCBVczwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGFyZSBncmF0ZWZ1bCBmb3Igb3VyIGNvbW11bml0aWVzLCBvdXIgY2xpZW50cywgYW5kIGZyaWVuZHMgYW5kXG4gICAgICAgICAgd2VsY29tZSB0aGUgb3Bwb3J0dW5pdHkgdG8gYXNzaXN0IHlvdSB3aXRoIHlvdXIgcGFydGljdWxhciBsZWdhbFxuICAgICAgICAgIHNpdHVhdGlvbi4gRmVlbCBmcmVlIHRvIHN0b3AgYnkgb3IgY2FsbCB0byBkaXNjdXNzIHlvdXIgbGVnYWwgbmVlZHMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuPEZvb3RlciAvPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VEQWF1QyxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
