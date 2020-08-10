import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, g as detach_dev, f as claim_space, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.97d669e6.js';

/* src/routes/about.svelte generated by Svelte v3.24.1 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let div20;
	let div4;
	let div3;
	let div2;
	let div0;
	let img0;
	let img0_src_value;
	let t0;
	let div1;
	let h30;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let div9;
	let div8;
	let div7;
	let div5;
	let img1;
	let img1_src_value;
	let t5;
	let div6;
	let h31;
	let t6;
	let t7;
	let p1;
	let t8;
	let t9;
	let div14;
	let div13;
	let div12;
	let div10;
	let img2;
	let img2_src_value;
	let t10;
	let div11;
	let h32;
	let t11;
	let t12;
	let p2;
	let t13;
	let t14;
	let div19;
	let div18;
	let div17;
	let div15;
	let img3;
	let img3_src_value;
	let t15;
	let div16;
	let h33;
	let t16;
	let t17;
	let p3;
	let t18;

	const block = {
		c: function create() {
			div20 = element("div");
			div4 = element("div");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			img0 = element("img");
			t0 = space();
			div1 = element("div");
			h30 = element("h3");
			t1 = text("Media Top");
			t2 = space();
			p0 = element("p");
			t3 = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt.");
			t4 = space();
			div9 = element("div");
			div8 = element("div");
			div7 = element("div");
			div5 = element("div");
			img1 = element("img");
			t5 = space();
			div6 = element("div");
			h31 = element("h3");
			t6 = text("Media Top");
			t7 = space();
			p1 = element("p");
			t8 = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt.");
			t9 = space();
			div14 = element("div");
			div13 = element("div");
			div12 = element("div");
			div10 = element("div");
			img2 = element("img");
			t10 = space();
			div11 = element("div");
			h32 = element("h3");
			t11 = text("Media Top");
			t12 = space();
			p2 = element("p");
			t13 = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt.");
			t14 = space();
			div19 = element("div");
			div18 = element("div");
			div17 = element("div");
			div15 = element("div");
			img3 = element("img");
			t15 = space();
			div16 = element("div");
			h33 = element("h3");
			t16 = text("Media Top");
			t17 = space();
			p3 = element("p");
			t18 = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt.");
			this.h();
		},
		l: function claim(nodes) {
			div20 = claim_element(nodes, "DIV", { class: true });
			var div20_nodes = children(div20);
			div4 = claim_element(div20_nodes, "DIV", { class: true, "uk-grid": true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", {});
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img0 = claim_element(div0_nodes, "IMG", { src: true, alt: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h30 = claim_element(div1_nodes, "H3", { class: true });
			var h30_nodes = children(h30);
			t1 = claim_text(h30_nodes, "Media Top");
			h30_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			p0 = claim_element(div1_nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt.");
			p0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t4 = claim_space(div20_nodes);
			div9 = claim_element(div20_nodes, "DIV", { class: true, "uk-grid": true });
			var div9_nodes = children(div9);
			div8 = claim_element(div9_nodes, "DIV", {});
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div5 = claim_element(div7_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			img1 = claim_element(div5_nodes, "IMG", { src: true, alt: true });
			div5_nodes.forEach(detach_dev);
			t5 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			h31 = claim_element(div6_nodes, "H3", { class: true });
			var h31_nodes = children(h31);
			t6 = claim_text(h31_nodes, "Media Top");
			h31_nodes.forEach(detach_dev);
			t7 = claim_space(div6_nodes);
			p1 = claim_element(div6_nodes, "P", {});
			var p1_nodes = children(p1);
			t8 = claim_text(p1_nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt.");
			p1_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			t9 = claim_space(div20_nodes);
			div14 = claim_element(div20_nodes, "DIV", { class: true, "uk-grid": true });
			var div14_nodes = children(div14);
			div13 = claim_element(div14_nodes, "DIV", {});
			var div13_nodes = children(div13);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			div10 = claim_element(div12_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			img2 = claim_element(div10_nodes, "IMG", { src: true, alt: true });
			div10_nodes.forEach(detach_dev);
			t10 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			h32 = claim_element(div11_nodes, "H3", { class: true });
			var h32_nodes = children(h32);
			t11 = claim_text(h32_nodes, "Media Top");
			h32_nodes.forEach(detach_dev);
			t12 = claim_space(div11_nodes);
			p2 = claim_element(div11_nodes, "P", {});
			var p2_nodes = children(p2);
			t13 = claim_text(p2_nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt.");
			p2_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			t14 = claim_space(div20_nodes);
			div19 = claim_element(div20_nodes, "DIV", { class: true, "uk-grid": true });
			var div19_nodes = children(div19);
			div18 = claim_element(div19_nodes, "DIV", {});
			var div18_nodes = children(div18);
			div17 = claim_element(div18_nodes, "DIV", { class: true });
			var div17_nodes = children(div17);
			div15 = claim_element(div17_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			img3 = claim_element(div15_nodes, "IMG", { src: true, alt: true });
			div15_nodes.forEach(detach_dev);
			t15 = claim_space(div17_nodes);
			div16 = claim_element(div17_nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			h33 = claim_element(div16_nodes, "H3", { class: true });
			var h33_nodes = children(h33);
			t16 = claim_text(h33_nodes, "Media Top");
			h33_nodes.forEach(detach_dev);
			t17 = claim_space(div16_nodes);
			p3 = claim_element(div16_nodes, "P", {});
			var p3_nodes = children(p3);
			t18 = claim_text(p3_nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt.");
			p3_nodes.forEach(detach_dev);
			div16_nodes.forEach(detach_dev);
			div17_nodes.forEach(detach_dev);
			div18_nodes.forEach(detach_dev);
			div19_nodes.forEach(detach_dev);
			div20_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img0.src !== (img0_src_value = "images/light.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "");
			add_location(img0, file, 19, 10, 348);
			attr_dev(div0, "class", "uk-card-media-top");
			add_location(div0, file, 18, 8, 306);
			attr_dev(h30, "class", "uk-card-title");
			add_location(h30, file, 22, 10, 446);
			add_location(p0, file, 23, 10, 497);
			attr_dev(div1, "class", "uk-card-body");
			add_location(div1, file, 21, 8, 409);
			attr_dev(div2, "class", "uk-card uk-card-default");
			add_location(div2, file, 17, 6, 260);
			add_location(div3, file, 16, 4, 248);
			attr_dev(div4, "class", "uk-child-width-1-2@m");
			attr_dev(div4, "uk-grid", "");
			add_location(div4, file, 15, 2, 201);
			if (img1.src !== (img1_src_value = "images/light.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "");
			add_location(img1, file, 36, 10, 846);
			attr_dev(div5, "class", "uk-card-media-top");
			add_location(div5, file, 35, 8, 804);
			attr_dev(h31, "class", "uk-card-title");
			add_location(h31, file, 39, 10, 944);
			add_location(p1, file, 40, 10, 995);
			attr_dev(div6, "class", "uk-card-body");
			add_location(div6, file, 38, 8, 907);
			attr_dev(div7, "class", "uk-card uk-card-default");
			add_location(div7, file, 34, 6, 758);
			add_location(div8, file, 33, 4, 746);
			attr_dev(div9, "class", "uk-child-width-1-2@m");
			attr_dev(div9, "uk-grid", "");
			add_location(div9, file, 32, 2, 699);
			if (img2.src !== (img2_src_value = "images/light.jpg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "");
			add_location(img2, file, 53, 10, 1344);
			attr_dev(div10, "class", "uk-card-media-top");
			add_location(div10, file, 52, 8, 1302);
			attr_dev(h32, "class", "uk-card-title");
			add_location(h32, file, 56, 10, 1442);
			add_location(p2, file, 57, 10, 1493);
			attr_dev(div11, "class", "uk-card-body");
			add_location(div11, file, 55, 8, 1405);
			attr_dev(div12, "class", "uk-card uk-card-default");
			add_location(div12, file, 51, 6, 1256);
			add_location(div13, file, 50, 4, 1244);
			attr_dev(div14, "class", "uk-child-width-1-2@m");
			attr_dev(div14, "uk-grid", "");
			add_location(div14, file, 49, 2, 1197);
			if (img3.src !== (img3_src_value = "images/light.jpg")) attr_dev(img3, "src", img3_src_value);
			attr_dev(img3, "alt", "");
			add_location(img3, file, 70, 10, 1842);
			attr_dev(div15, "class", "uk-card-media-top");
			add_location(div15, file, 69, 8, 1800);
			attr_dev(h33, "class", "uk-card-title");
			add_location(h33, file, 73, 10, 1940);
			add_location(p3, file, 74, 10, 1991);
			attr_dev(div16, "class", "uk-card-body");
			add_location(div16, file, 72, 8, 1903);
			attr_dev(div17, "class", "uk-card uk-card-default");
			add_location(div17, file, 68, 6, 1754);
			add_location(div18, file, 67, 4, 1742);
			attr_dev(div19, "class", "uk-child-width-1-2@m");
			attr_dev(div19, "uk-grid", "");
			add_location(div19, file, 66, 2, 1695);
			attr_dev(div20, "class", "about-container svelte-1ntmxmb");
			add_location(div20, file, 13, 0, 151);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div20, anchor);
			append_dev(div20, div4);
			append_dev(div4, div3);
			append_dev(div3, div2);
			append_dev(div2, div0);
			append_dev(div0, img0);
			append_dev(div2, t0);
			append_dev(div2, div1);
			append_dev(div1, h30);
			append_dev(h30, t1);
			append_dev(div1, t2);
			append_dev(div1, p0);
			append_dev(p0, t3);
			append_dev(div20, t4);
			append_dev(div20, div9);
			append_dev(div9, div8);
			append_dev(div8, div7);
			append_dev(div7, div5);
			append_dev(div5, img1);
			append_dev(div7, t5);
			append_dev(div7, div6);
			append_dev(div6, h31);
			append_dev(h31, t6);
			append_dev(div6, t7);
			append_dev(div6, p1);
			append_dev(p1, t8);
			append_dev(div20, t9);
			append_dev(div20, div14);
			append_dev(div14, div13);
			append_dev(div13, div12);
			append_dev(div12, div10);
			append_dev(div10, img2);
			append_dev(div12, t10);
			append_dev(div12, div11);
			append_dev(div11, h32);
			append_dev(h32, t11);
			append_dev(div11, t12);
			append_dev(div11, p2);
			append_dev(p2, t13);
			append_dev(div20, t14);
			append_dev(div20, div19);
			append_dev(div19, div18);
			append_dev(div18, div17);
			append_dev(div17, div15);
			append_dev(div15, img3);
			append_dev(div17, t15);
			append_dev(div17, div16);
			append_dev(div16, h33);
			append_dev(h33, t16);
			append_dev(div16, t17);
			append_dev(div16, p3);
			append_dev(p3, t18);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div20);
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

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("About", $$slots, []);
	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuN2E5ZWQ3Y2QuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=