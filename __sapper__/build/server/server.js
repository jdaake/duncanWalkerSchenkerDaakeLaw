'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function null_to_empty(value) {
    return value == null ? '' : value;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const navStore = writable({
  //   homeIsActive: false,
  //   aboutIsActive: false,
  //   locationsIsActive: false,
  //   practiceIsActive: false,
  //   contactIsActive: false,
  activePage: '',
});

/* src/routes/index.svelte generated by Svelte v3.24.1 */

const css = {
	code: "h3.svelte-1uuce09,p.svelte-1uuce09{font-family:\"Fira Sans\", sans-serif}.home-container.svelte-1uuce09{margin:auto;width:80vw;padding-bottom:3rem}.uk-card.svelte-1uuce09{border:1px solid rgba(0, 0, 0, 0.08) !important}.main-logo.svelte-1uuce09{max-width:575px;height:auto;display:flex;margin:auto}@media(max-width: 991.98px){.home-container.svelte-1uuce09{margin-top:2.5rem;width:90vw;padding-bottom:2rem}.main-logo.svelte-1uuce09{max-width:450px}}@media(max-width: 768px){.home-container.svelte-1uuce09{margin-top:-0.5rem}.main-logo.svelte-1uuce09{max-width:450px}}@media(max-width: 740px){.home-container.svelte-1uuce09{margin-top:2rem}}@media(max-width: 667px){h3.svelte-1uuce09{text-align:center}.home-container.svelte-1uuce09{margin-top:2rem;padding-bottom:1rem;width:90vw}.main-logo.svelte-1uuce09{max-width:325px}}@media(max-width: 568px){.home-container.svelte-1uuce09{margin-top:1rem;width:80vw}.main-logo.svelte-1uuce09{max-width:225px}}@media(max-width: 414px){.home-container.svelte-1uuce09{margin-top:-1rem}}@media(max-width: 375px){.home-container.svelte-1uuce09{margin-top:-1rem}}@media(max-width: 320px){.home-container.svelte-1uuce09{margin-top:0rem}}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\n  import { fade } from \\\"svelte/transition\\\";\\n  import { onMount, onDestroy } from \\\"svelte\\\";\\n  import navStore from \\\"../stores/nav-store.js\\\";\\n  let pageIsActive;\\n\\n  const unsubscribeNav = navStore.subscribe(activePage => {\\n    pageIsActive = activePage;\\n  });\\n\\n  navStore.update(() => {\\n    return { activePage: \\\"home\\\" };\\n  });\\n\\n  onDestroy(() => {\\n    if (unsubscribeNav) {\\n      unsubscribeNav();\\n    }\\n  });\\n</script>\\n\\n<style>\\n  h3,\\n  p {\\n    font-family: \\\"Fira Sans\\\", sans-serif;\\n  }\\n\\n  .home-container {\\n    margin: auto;\\n    width: 80vw;\\n    padding-bottom: 3rem;\\n  }\\n\\n  .uk-card {\\n    border: 1px solid rgba(0, 0, 0, 0.08) !important;\\n  }\\n\\n  .main-logo {\\n    max-width: 575px;\\n    height: auto;\\n    display: flex;\\n    margin: auto;\\n  }\\n\\n  @media (max-width: 991.98px) {\\n    .home-container {\\n      margin-top: 2.5rem;\\n      width: 90vw;\\n      padding-bottom: 2rem;\\n    }\\n    .main-logo {\\n      max-width: 450px;\\n    }\\n  }\\n  @media (max-width: 768px) {\\n    .home-container {\\n      margin-top: -0.5rem;\\n    }\\n    .main-logo {\\n      max-width: 450px;\\n    }\\n  }\\n  @media (max-width: 740px) {\\n    .home-container {\\n      margin-top: 2rem;\\n    }\\n  }\\n\\n  @media (max-width: 667px) {\\n    h3 {\\n      text-align: center;\\n    }\\n    .home-container {\\n      margin-top: 2rem;\\n      padding-bottom: 1rem;\\n      width: 90vw;\\n    }\\n    .main-logo {\\n      max-width: 325px;\\n    }\\n  }\\n\\n  @media (max-width: 568px) {\\n    .home-container {\\n      margin-top: 1rem;\\n      width: 80vw;\\n    }\\n    .main-logo {\\n      max-width: 225px;\\n    }\\n  }\\n\\n  @media (max-width: 414px) {\\n    .home-container {\\n      margin-top: -1rem;\\n    }\\n  }\\n\\n  @media (max-width: 375px) {\\n    .home-container {\\n      margin-top: -1rem;\\n    }\\n  }\\n\\n  @media (max-width: 320px) {\\n    .home-container {\\n      margin-top: 0rem;\\n    }\\n  }\\n</style>\\n\\n<svelte:head>\\n  <title>Duncan, Walker, Schenker, & Daake, PC, LLO</title>\\n</svelte:head>\\n\\n<div class=\\\"home-container\\\" in:fade={{ duration: 400, delay: 100 }}>\\n  <div>\\n    <img class=\\\"main-logo\\\" src=\\\"./images/logos/dwsdLogoColor.jpg\\\" alt=\\\"\\\" />\\n  </div>\\n  <!-- card 1 -->\\n  <div\\n    class=\\\"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\\n    uk-margin uk-box-shadow-medium\\\"\\n    uk-grid>\\n    <div class=\\\"uk-card-media-left uk-cover-container\\\">\\n      <img src=\\\"./images/farmingSmall.jpg\\\" alt=\\\"Farming\\\" uk-cover />\\n      <canvas width=\\\"400\\\" height=\\\"300\\\" />\\n    </div>\\n    <div>\\n      <div class=\\\"uk-card-body\\\">\\n        <h3 class=\\\"uk-card-title\\\">Our Practice</h3>\\n        <p>\\n          Duncan, Walker, Schenker & Daake, P.C., L.L.O. represents individuals,\\n          families, farmers, banks, and small businesses. With our extensive\\n          experience, our practice has developed into a comprehensive law firm\\n          handling an assortment of legal issues.\\n        </p>\\n        <p>\\n          Our respective backgrounds allow us to meet the often complex and\\n          interdisciplinary needs of our local citizens as a team. Our clients'\\n          interests are at the heart of everything we do, and we place a strong\\n          emphasis on professionalism in serving the needs of our fellow South\\n          Central Nebraskans.\\n        </p>\\n        <p>\\n          We are grateful for our community, our clients, and friends and\\n          welcome the opportunity to assist you with your particular situation.\\n          Feel free to stop by or call to discuss your legal needs.\\n        </p>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAsBE,iBAAE,CACF,CAAC,eAAC,CAAC,AACD,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,eAAe,eAAC,CAAC,AACf,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,IAAI,AACtB,CAAC,AAED,QAAQ,eAAC,CAAC,AACR,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,UAAU,AAClD,CAAC,AAED,UAAU,eAAC,CAAC,AACV,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,AACd,CAAC,AAED,MAAM,AAAC,YAAY,QAAQ,CAAC,AAAC,CAAC,AAC5B,eAAe,eAAC,CAAC,AACf,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,IAAI,AACtB,CAAC,AACD,UAAU,eAAC,CAAC,AACV,SAAS,CAAE,KAAK,AAClB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,eAAe,eAAC,CAAC,AACf,UAAU,CAAE,OAAO,AACrB,CAAC,AACD,UAAU,eAAC,CAAC,AACV,SAAS,CAAE,KAAK,AAClB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,eAAe,eAAC,CAAC,AACf,UAAU,CAAE,IAAI,AAClB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,EAAE,eAAC,CAAC,AACF,UAAU,CAAE,MAAM,AACpB,CAAC,AACD,eAAe,eAAC,CAAC,AACf,UAAU,CAAE,IAAI,CAChB,cAAc,CAAE,IAAI,CACpB,KAAK,CAAE,IAAI,AACb,CAAC,AACD,UAAU,eAAC,CAAC,AACV,SAAS,CAAE,KAAK,AAClB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,eAAe,eAAC,CAAC,AACf,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,AACb,CAAC,AACD,UAAU,eAAC,CAAC,AACV,SAAS,CAAE,KAAK,AAClB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,eAAe,eAAC,CAAC,AACf,UAAU,CAAE,KAAK,AACnB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,eAAe,eAAC,CAAC,AACf,UAAU,CAAE,KAAK,AACnB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,eAAe,eAAC,CAAC,AACf,UAAU,CAAE,IAAI,AAClB,CAAC,AACH,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {

	const unsubscribeNav = navStore.subscribe(activePage => {
	});

	navStore.update(() => {
		return { activePage: "home" };
	});

	onDestroy(() => {
		if (unsubscribeNav) {
			unsubscribeNav();
		}
	});

	$$result.css.add(css);

	return `${($$result.head += `${($$result.title = `<title>Duncan, Walker, Schenker, &amp; Daake, PC, LLO</title>`, "")}`, "")}

<div class="${"home-container svelte-1uuce09"}"><div><img class="${"main-logo svelte-1uuce09"}" src="${"./images/logos/dwsdLogoColor.jpg"}" alt="${""}"></div>
  
  <div class="${"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\n    uk-margin uk-box-shadow-medium svelte-1uuce09"}" uk-grid><div class="${"uk-card-media-left uk-cover-container"}"><img src="${"./images/farmingSmall.jpg"}" alt="${"Farming"}" uk-cover>
      <canvas width="${"400"}" height="${"300"}"></canvas></div>
    <div><div class="${"uk-card-body"}"><h3 class="${"uk-card-title svelte-1uuce09"}">Our Practice</h3>
        <p class="${"svelte-1uuce09"}">Duncan, Walker, Schenker &amp; Daake, P.C., L.L.O. represents individuals,
          families, farmers, banks, and small businesses. With our extensive
          experience, our practice has developed into a comprehensive law firm
          handling an assortment of legal issues.
        </p>
        <p class="${"svelte-1uuce09"}">Our respective backgrounds allow us to meet the often complex and
          interdisciplinary needs of our local citizens as a team. Our clients&#39;
          interests are at the heart of everything we do, and we place a strong
          emphasis on professionalism in serving the needs of our fellow South
          Central Nebraskans.
        </p>
        <p class="${"svelte-1uuce09"}">We are grateful for our community, our clients, and friends and
          welcome the opportunity to assist you with your particular situation.
          Feel free to stop by or call to discuss your legal needs.
        </p></div></div></div></div>`;
});

var component_0 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Routes
});

/* src/components/LocationCard.svelte generated by Svelte v3.24.1 */

const css$1 = {
	code: "h3.svelte-82xcad{font-family:\"Fira Sans\", sans-serif}.details.svelte-82xcad{font-size:1rem;font-family:\"Fira Sans\", sans-serif;text-align:left}.uk-card-body.svelte-82xcad{width:175px !important}.uk-card.svelte-82xcad{margin:1rem}@media(max-width: 660px){canvas.svelte-82xcad{width:352px !important;height:200px !important}}@media(max-width: 568px){canvas.svelte-82xcad{width:230px !important;height:200px !important}}@media(max-width: 414px){canvas.svelte-82xcad{width:350px !important;height:200px !important}}@media(max-width: 375px){canvas.svelte-82xcad{width:310px !important;height:200px !important}}@media(max-width: 320px){canvas.svelte-82xcad{width:255px !important;height:200px !important}}",
	map: "{\"version\":3,\"file\":\"LocationCard.svelte\",\"sources\":[\"LocationCard.svelte\"],\"sourcesContent\":[\"<script>\\n  export let officeLocation;\\n  export let street;\\n  export let poBox;\\n  export let city;\\n  export let state;\\n  export let zip;\\n  export let phone;\\n  export let fax;\\n  export let imgUrl;\\n  export let mapUrl;\\n</script>\\n\\n<style>\\n  h3 {\\n    font-family: \\\"Fira Sans\\\", sans-serif;\\n  }\\n  .details {\\n    font-size: 1rem;\\n    font-family: \\\"Fira Sans\\\", sans-serif;\\n    /* padding: 1rem; */\\n    text-align: left;\\n  }\\n  .uk-card-body {\\n    width: 175px !important;\\n  }\\n  .uk-card {\\n    margin: 1rem;\\n  }\\n  @media (max-width: 660px) {\\n    canvas {\\n      width: 352px !important;\\n      height: 200px !important;\\n    }\\n  }\\n\\n  @media (max-width: 568px) {\\n    canvas {\\n      width: 230px !important;\\n      height: 200px !important;\\n    }\\n  }\\n  @media (max-width: 414px) {\\n    canvas {\\n      width: 350px !important;\\n      height: 200px !important;\\n    }\\n  }\\n  @media (max-width: 375px) {\\n    canvas {\\n      width: 310px !important;\\n      height: 200px !important;\\n    }\\n  }\\n  @media (max-width: 320px) {\\n    canvas {\\n      width: 255px !important;\\n      height: 200px !important;\\n    }\\n  }\\n</style>\\n\\n<!-- <section> -->\\n<div\\n  class=\\\"uk-card uk-card-default uk-grid-collapse uk-margin uk-card-hover\\\"\\n  uk-grid>\\n  <div class=\\\"uk-card-media-left uk-cover-container\\\">\\n    <a href={mapUrl} target=\\\"_blank\\\">\\n      <img src={imgUrl} alt={officeLocation} uk-cover title=\\\"View on Map\\\" />\\n    </a>\\n    <canvas width=\\\"275\\\" height=\\\"200\\\" />\\n  </div>\\n  <div>\\n    <div class=\\\"uk-card-body\\\">\\n      <h3 class=\\\"uk-card-title\\\">{officeLocation}</h3>\\n      <div class=\\\"details\\\">\\n        <div>{street}</div>\\n        <div>{poBox}</div>\\n        <div>{city}, {state} {zip}</div>\\n        <a href={mapUrl} target=\\\"_blank\\\">\\n          <span uk-icon=\\\"location\\\" />\\n          View on Map\\n        </a>\\n        <hr />\\n        <div>\\n          Phone:\\n          <a href=\\\"tel:{phone}\\\">{phone}</a>\\n        </div>\\n        <div>Fax: {fax}</div>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n<!-- </section> -->\\n\"],\"names\":[],\"mappings\":\"AAcE,EAAE,cAAC,CAAC,AACF,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,AACtC,CAAC,AACD,QAAQ,cAAC,CAAC,AACR,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CAEpC,UAAU,CAAE,IAAI,AAClB,CAAC,AACD,aAAa,cAAC,CAAC,AACb,KAAK,CAAE,KAAK,CAAC,UAAU,AACzB,CAAC,AACD,QAAQ,cAAC,CAAC,AACR,MAAM,CAAE,IAAI,AACd,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,MAAM,cAAC,CAAC,AACN,KAAK,CAAE,KAAK,CAAC,UAAU,CACvB,MAAM,CAAE,KAAK,CAAC,UAAU,AAC1B,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,MAAM,cAAC,CAAC,AACN,KAAK,CAAE,KAAK,CAAC,UAAU,CACvB,MAAM,CAAE,KAAK,CAAC,UAAU,AAC1B,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,MAAM,cAAC,CAAC,AACN,KAAK,CAAE,KAAK,CAAC,UAAU,CACvB,MAAM,CAAE,KAAK,CAAC,UAAU,AAC1B,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,MAAM,cAAC,CAAC,AACN,KAAK,CAAE,KAAK,CAAC,UAAU,CACvB,MAAM,CAAE,KAAK,CAAC,UAAU,AAC1B,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,MAAM,cAAC,CAAC,AACN,KAAK,CAAE,KAAK,CAAC,UAAU,CACvB,MAAM,CAAE,KAAK,CAAC,UAAU,AAC1B,CAAC,AACH,CAAC\"}"
};

const LocationCard = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { officeLocation } = $$props;
	let { street } = $$props;
	let { poBox } = $$props;
	let { city } = $$props;
	let { state } = $$props;
	let { zip } = $$props;
	let { phone } = $$props;
	let { fax } = $$props;
	let { imgUrl } = $$props;
	let { mapUrl } = $$props;
	if ($$props.officeLocation === void 0 && $$bindings.officeLocation && officeLocation !== void 0) $$bindings.officeLocation(officeLocation);
	if ($$props.street === void 0 && $$bindings.street && street !== void 0) $$bindings.street(street);
	if ($$props.poBox === void 0 && $$bindings.poBox && poBox !== void 0) $$bindings.poBox(poBox);
	if ($$props.city === void 0 && $$bindings.city && city !== void 0) $$bindings.city(city);
	if ($$props.state === void 0 && $$bindings.state && state !== void 0) $$bindings.state(state);
	if ($$props.zip === void 0 && $$bindings.zip && zip !== void 0) $$bindings.zip(zip);
	if ($$props.phone === void 0 && $$bindings.phone && phone !== void 0) $$bindings.phone(phone);
	if ($$props.fax === void 0 && $$bindings.fax && fax !== void 0) $$bindings.fax(fax);
	if ($$props.imgUrl === void 0 && $$bindings.imgUrl && imgUrl !== void 0) $$bindings.imgUrl(imgUrl);
	if ($$props.mapUrl === void 0 && $$bindings.mapUrl && mapUrl !== void 0) $$bindings.mapUrl(mapUrl);
	$$result.css.add(css$1);

	return `
<div class="${"uk-card uk-card-default uk-grid-collapse uk-margin uk-card-hover svelte-82xcad"}" uk-grid><div class="${"uk-card-media-left uk-cover-container"}"><a${add_attribute("href", mapUrl, 0)} target="${"_blank"}"><img${add_attribute("src", imgUrl, 0)}${add_attribute("alt", officeLocation, 0)} uk-cover title="${"View on Map"}"></a>
    <canvas width="${"275"}" height="${"200"}" class="${"svelte-82xcad"}"></canvas></div>
  <div><div class="${"uk-card-body svelte-82xcad"}"><h3 class="${"uk-card-title svelte-82xcad"}">${escape(officeLocation)}</h3>
      <div class="${"details svelte-82xcad"}"><div>${escape(street)}</div>
        <div>${escape(poBox)}</div>
        <div>${escape(city)}, ${escape(state)} ${escape(zip)}</div>
        <a${add_attribute("href", mapUrl, 0)} target="${"_blank"}"><span uk-icon="${"location"}"></span>
          View on Map
        </a>
        <hr>
        <div>Phone:
          <a href="${"tel:" + escape(phone)}">${escape(phone)}</a></div>
        <div>Fax: ${escape(fax)}</div></div></div></div></div>
`;
});

const locationData = writable([
  {
    officeLocation: 'Franklin',
    street: '702 15th Avenue',
    poBox: 'P.O. Box 207',
    city: 'Franklin',
    state: 'NE',
    zip: '68939',
    phone: '(308) 425-6273',
    fax: '(308) 425-6274',
    email: 'duncanjelkin@yahoo.com',
    imgUrl: './images/franklinOffice.jpg',
    mapUrl: 'http://g.co/maps/8zsb7',
  },
  {
    officeLocation: 'Oxford',
    street: '325 Ogden Street',
    poBox: 'P.O. Box 67',
    city: 'Oxford',
    state: 'NE',
    zip: '68967',
    phone: '(308) 824-3231',
    fax: '(308) 824-3692',
    email: 'ddwnlaw@yahoo.com',
    imgUrl: './images/oxfordOffice.jpg',
    mapUrl: 'http://g.co/maps/wxw83',
  },
  {
    officeLocation: 'Alma',
    street: '616 W Main Street',
    poBox: 'P.O. Box 528',
    city: 'Alma',
    state: 'NE',
    zip: '68920',
    phone: '(308) 928-2165',
    fax: '(308)-928-2166',
    email: 'duncanjelkin@yahoo.com',
    imgUrl: './images/almaOffice.jpg',
    mapUrl: 'http://g.co/maps/2hbxx',
  },
  {
    officeLocation: 'Hildreth',
    street: '144 Commercial Avenue',
    poBox: 'P.O. Box 340',
    city: 'Hildreth',
    state: 'NE',
    zip: '68947',
    phone: '(308) 938-4585',
    fax: '(308) 938-3014',
    email: 'ddjwlaw@yahoo.com',
    imgUrl: './images/hildrethOffice.jpg',
    mapUrl: 'http://g.co/maps/dw7ev',
  },
]);

/* src/routes/locations.svelte generated by Svelte v3.24.1 */

const css$2 = {
	code: ".locations-container.svelte-bbkyzx{display:flex;flex-flow:row wrap;align-content:flex-start;justify-content:center;margin:auto;max-width:90vw;padding:1rem 0rem}@media(max-width: 991.98px){.locations-container.svelte-bbkyzx{margin-top:2rem;max-width:90vw}}@media(max-width: 768px){.locations-container.svelte-bbkyzx{margin-top:-2rem}}@media(max-width: 740px){.locations-container.svelte-bbkyzx{margin-top:2rem}}@media(max-width: 667px){.locations-container.svelte-bbkyzx{max-width:90vw;margin-top:2rem;padding-bottom:1rem}}@media(max-width: 570px){.locations-container.svelte-bbkyzx{margin-top:1rem}}@media(max-width: 414px){.locations-container.svelte-bbkyzx{margin-top:-2rem}}@media(max-width: 375px){.locations-container.svelte-bbkyzx{margin-top:-2rem}}@media(max-width: 320px){.locations-container.svelte-bbkyzx{margin-top:-2rem}}",
	map: "{\"version\":3,\"file\":\"locations.svelte\",\"sources\":[\"locations.svelte\"],\"sourcesContent\":[\"<script>\\n  import { onDestroy } from \\\"svelte\\\";\\n  import { fade } from \\\"svelte/transition\\\";\\n  import LocationCard from \\\"../components/LocationCard.svelte\\\";\\n  import locationData from \\\"../stores/locations-store.js\\\";\\n  import navStore from \\\"../stores/nav-store.js\\\";\\n  let pageIsActive;\\n  const unsubscribeNav = navStore.subscribe(activePage => {\\n    pageIsActive = activePage;\\n  });\\n\\n  navStore.update(() => {\\n    return { activePage: \\\"locations\\\" };\\n  });\\n\\n  onDestroy(() => {\\n    if (unsubscribeNav) {\\n      unsubscribeNav();\\n    }\\n  });\\n</script>\\n\\n<style>\\n  .locations-container {\\n    display: flex;\\n    flex-flow: row wrap;\\n    align-content: flex-start;\\n    justify-content: center;\\n    margin: auto;\\n    max-width: 90vw;\\n    padding: 1rem 0rem;\\n  }\\n\\n  @media (max-width: 991.98px) {\\n    .locations-container {\\n      margin-top: 2rem;\\n      max-width: 90vw;\\n    }\\n  }\\n  @media (max-width: 768px) {\\n    .locations-container {\\n      margin-top: -2rem;\\n    }\\n  }\\n  @media (max-width: 740px) {\\n    .locations-container {\\n      margin-top: 2rem;\\n    }\\n  }\\n\\n  @media (max-width: 667px) {\\n    .locations-container {\\n      max-width: 90vw;\\n      margin-top: 2rem;\\n      padding-bottom: 1rem;\\n    }\\n  }\\n\\n  @media (max-width: 570px) {\\n    .locations-container {\\n      margin-top: 1rem;\\n    }\\n  }\\n  @media (max-width: 414px) {\\n    .locations-container {\\n      margin-top: -2rem;\\n    }\\n  }\\n  @media (max-width: 375px) {\\n    .locations-container {\\n      margin-top: -2rem;\\n    }\\n  }\\n\\n  @media (max-width: 320px) {\\n    .locations-container {\\n      margin-top: -2rem;\\n    }\\n  }\\n</style>\\n\\n<svelte:head>\\n  <title>Locations</title>\\n</svelte:head>\\n<div class=\\\"locations-container\\\" in:fade={{ duration: 400, delay: 100 }}>\\n  {#each $locationData as location}\\n    <LocationCard\\n      officeLocation={location.officeLocation}\\n      street={location.street}\\n      poBox={location.poBox}\\n      city={location.city}\\n      state={location.state}\\n      zip={location.zip}\\n      phone={location.phone}\\n      fax={location.fax}\\n      email={location.email}\\n      imgUrl={location.imgUrl}\\n      mapUrl={location.mapUrl} />\\n  {/each}\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAuBE,oBAAoB,cAAC,CAAC,AACpB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CAAC,IAAI,CACnB,aAAa,CAAE,UAAU,CACzB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CAAC,IAAI,AACpB,CAAC,AAED,MAAM,AAAC,YAAY,QAAQ,CAAC,AAAC,CAAC,AAC5B,oBAAoB,cAAC,CAAC,AACpB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,AACjB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,oBAAoB,cAAC,CAAC,AACpB,UAAU,CAAE,KAAK,AACnB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,oBAAoB,cAAC,CAAC,AACpB,UAAU,CAAE,IAAI,AAClB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,oBAAoB,cAAC,CAAC,AACpB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,cAAc,CAAE,IAAI,AACtB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,oBAAoB,cAAC,CAAC,AACpB,UAAU,CAAE,IAAI,AAClB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,oBAAoB,cAAC,CAAC,AACpB,UAAU,CAAE,KAAK,AACnB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,oBAAoB,cAAC,CAAC,AACpB,UAAU,CAAE,KAAK,AACnB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,oBAAoB,cAAC,CAAC,AACpB,UAAU,CAAE,KAAK,AACnB,CAAC,AACH,CAAC\"}"
};

const Locations = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $locationData = get_store_value(locationData);

	const unsubscribeNav = navStore.subscribe(activePage => {
	});

	navStore.update(() => {
		return { activePage: "locations" };
	});

	onDestroy(() => {
		if (unsubscribeNav) {
			unsubscribeNav();
		}
	});

	$$result.css.add(css$2);

	return `${($$result.head += `${($$result.title = `<title>Locations</title>`, "")}`, "")}
<div class="${"locations-container svelte-bbkyzx"}">${each($locationData, location => `${validate_component(LocationCard, "LocationCard").$$render(
		$$result,
		{
			officeLocation: location.officeLocation,
			street: location.street,
			poBox: location.poBox,
			city: location.city,
			state: location.state,
			zip: location.zip,
			phone: location.phone,
			fax: location.fax,
			email: location.email,
			imgUrl: location.imgUrl,
			mapUrl: location.mapUrl
		},
		{},
		{}
	)}`)}</div>`;
});

var component_1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Locations
});

/* src/routes/practice.svelte generated by Svelte v3.24.1 */

const css$3 = {
	code: "h3.svelte-10kkdx5,li.svelte-10kkdx5,p.svelte-10kkdx5{font-family:\"Fira Sans\", sans-serif}.practice-container.svelte-10kkdx5{display:flex;flex-flow:row wrap;align-content:flex-start;justify-content:center;margin:auto;max-width:80vw;padding-top:3rem;padding-bottom:3rem}@media(max-width: 991.98px){.practice-container.svelte-10kkdx5{margin:auto;max-width:90vw;margin-top:2rem;padding-bottom:1rem}}@media(max-width: 768px){.practice-container.svelte-10kkdx5{margin-top:-2rem}}@media(max-width: 740px){.practice-container.svelte-10kkdx5{margin-top:1rem}}@media(max-width: 667px){h3.svelte-10kkdx5,p.svelte-10kkdx5{text-align:center}.practice-container.svelte-10kkdx5{margin-top:1rem;max-width:90vw}}@media(max-width: 570px){.practice-container.svelte-10kkdx5{margin-top:0rem;max-width:80vw}}@media(max-width: 414px){.practice-container.svelte-10kkdx5{margin-top:-3rem}}@media(max-width: 375px){.practice-container.svelte-10kkdx5{margin-top:-3rem}}@media(max-width: 320px){.practice-container.svelte-10kkdx5{margin-top:-2rem}}",
	map: "{\"version\":3,\"file\":\"practice.svelte\",\"sources\":[\"practice.svelte\"],\"sourcesContent\":[\"<script>\\n  import { onDestroy } from \\\"svelte\\\";\\n  import navStore from \\\"../stores/nav-store.js\\\";\\n  import { fade } from \\\"svelte/transition\\\";\\n  let pageIsActive;\\n\\n  const unsubscribeNav = navStore.subscribe(activePage => {\\n    pageIsActive = activePage;\\n  });\\n\\n  navStore.update(() => {\\n    return { activePage: \\\"practice\\\" };\\n  });\\n\\n  onDestroy(() => {\\n    if (unsubscribeNav) {\\n      unsubscribeNav();\\n    }\\n  });\\n</script>\\n\\n<style>\\n  h3,\\n  li,\\n  p {\\n    font-family: \\\"Fira Sans\\\", sans-serif;\\n  }\\n\\n  .practice-container {\\n    display: flex;\\n    flex-flow: row wrap;\\n    align-content: flex-start;\\n    justify-content: center;\\n    margin: auto;\\n    max-width: 80vw;\\n    padding-top: 3rem;\\n    padding-bottom: 3rem;\\n  }\\n\\n  @media (max-width: 991.98px) {\\n    .practice-container {\\n      margin: auto;\\n      max-width: 90vw;\\n      margin-top: 2rem;\\n      padding-bottom: 1rem;\\n    }\\n  }\\n\\n  @media (max-width: 768px) {\\n    .practice-container {\\n      margin-top: -2rem;\\n    }\\n  }\\n\\n  @media (max-width: 740px) {\\n    .practice-container {\\n      margin-top: 1rem;\\n    }\\n  }\\n  @media (max-width: 667px) {\\n    h3,\\n    p {\\n      text-align: center;\\n    }\\n    .practice-container {\\n      margin-top: 1rem;\\n      max-width: 90vw;\\n    }\\n  }\\n\\n  @media (max-width: 570px) {\\n    .practice-container {\\n      margin-top: 0rem;\\n      max-width: 80vw;\\n    }\\n  }\\n  @media (max-width: 414px) {\\n    .practice-container {\\n      margin-top: -3rem;\\n    }\\n  }\\n  @media (max-width: 375px) {\\n    .practice-container {\\n      margin-top: -3rem;\\n    }\\n  }\\n  @media (max-width: 320px) {\\n    .practice-container {\\n      margin-top: -2rem;\\n    }\\n  }\\n</style>\\n\\n<svelte:head>\\n  <title>Areas of Practice</title>\\n</svelte:head>\\n\\n<div class=\\\"practice-container\\\" in:fade={{ duration: 400, delay: 100 }}>\\n\\n  <!-- card 1 -->\\n  <div\\n    class=\\\"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\\n    uk-margin uk-box-shadow-medium\\\"\\n    uk-grid>\\n    <div class=\\\"uk-card-media-left uk-cover-container\\\">\\n      <img src=\\\"./images/ladyJustice.jpg\\\" alt=\\\"Lady Justice\\\" uk-cover />\\n      <canvas width=\\\"500\\\" height=\\\"450\\\" />\\n    </div>\\n    <div>\\n      <div class=\\\"uk-card-body\\\">\\n        <h3 class=\\\"uk-card-title\\\">Areas of Practice</h3>\\n        <p>Our team specializes in the following areas of practice:</p>\\n        <ul>\\n          <li>Agricultural Law</li>\\n          <li>Business Law</li>\\n          <li>Family Law</li>\\n          <li>Civil Litigation</li>\\n          <li>Estate Planning</li>\\n          <li>Real Estate</li>\\n          <li>Tax Preparation and Advice</li>\\n        </ul>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAsBE,iBAAE,CACF,iBAAE,CACF,CAAC,eAAC,CAAC,AACD,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,mBAAmB,eAAC,CAAC,AACnB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CAAC,IAAI,CACnB,aAAa,CAAE,UAAU,CACzB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,IAAI,AACtB,CAAC,AAED,MAAM,AAAC,YAAY,QAAQ,CAAC,AAAC,CAAC,AAC5B,mBAAmB,eAAC,CAAC,AACnB,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,cAAc,CAAE,IAAI,AACtB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,mBAAmB,eAAC,CAAC,AACnB,UAAU,CAAE,KAAK,AACnB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,mBAAmB,eAAC,CAAC,AACnB,UAAU,CAAE,IAAI,AAClB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,iBAAE,CACF,CAAC,eAAC,CAAC,AACD,UAAU,CAAE,MAAM,AACpB,CAAC,AACD,mBAAmB,eAAC,CAAC,AACnB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,AACjB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,mBAAmB,eAAC,CAAC,AACnB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,AACjB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,mBAAmB,eAAC,CAAC,AACnB,UAAU,CAAE,KAAK,AACnB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,mBAAmB,eAAC,CAAC,AACnB,UAAU,CAAE,KAAK,AACnB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,mBAAmB,eAAC,CAAC,AACnB,UAAU,CAAE,KAAK,AACnB,CAAC,AACH,CAAC\"}"
};

const Practice = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {

	const unsubscribeNav = navStore.subscribe(activePage => {
	});

	navStore.update(() => {
		return { activePage: "practice" };
	});

	onDestroy(() => {
		if (unsubscribeNav) {
			unsubscribeNav();
		}
	});

	$$result.css.add(css$3);

	return `${($$result.head += `${($$result.title = `<title>Areas of Practice</title>`, "")}`, "")}

<div class="${"practice-container svelte-10kkdx5"}">
  <div class="${"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s\n    uk-margin uk-box-shadow-medium"}" uk-grid><div class="${"uk-card-media-left uk-cover-container"}"><img src="${"./images/ladyJustice.jpg"}" alt="${"Lady Justice"}" uk-cover>
      <canvas width="${"500"}" height="${"450"}"></canvas></div>
    <div><div class="${"uk-card-body"}"><h3 class="${"uk-card-title svelte-10kkdx5"}">Areas of Practice</h3>
        <p class="${"svelte-10kkdx5"}">Our team specializes in the following areas of practice:</p>
        <ul><li class="${"svelte-10kkdx5"}">Agricultural Law</li>
          <li class="${"svelte-10kkdx5"}">Business Law</li>
          <li class="${"svelte-10kkdx5"}">Family Law</li>
          <li class="${"svelte-10kkdx5"}">Civil Litigation</li>
          <li class="${"svelte-10kkdx5"}">Estate Planning</li>
          <li class="${"svelte-10kkdx5"}">Real Estate</li>
          <li class="${"svelte-10kkdx5"}">Tax Preparation and Advice</li></ul></div></div></div></div>`;
});

var component_2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Practice
});

const aboutData = writable([
  {
    name: 'Jaclyn Daake',
    nameOnModal: 'Jaclyn Daake, Partner',
    phone: '(308) 928-2165',
    email: ' jndaake@gmail.com',
    img: './images/jaclyn.jpg',
    modalName: 'jaclyn',
    linkedin: 'https://www.linkedin.com/in/jaclyncannaday/',
    bio1:
      'Jaclyn is the newest partner to the firm. She specializes in Litigation, Family Law, and Real Estate.',
    bio2:
      'Jaclyn was born and raised in Texas, graduating from Schreiner University in 2009 with a B.A. in Political Science. After a stint in the workforce as a summer camp director, Jaclyn pursued her Juris Doctorate at Washburn University School of Law in Topeka, Kansas.  There, she competed on multiple trial advocacy teams, eventually graduating with a Certificate in Advocacy with Distinction in December 2013. Since becoming an attorney, Jaclyn has served a variety of roles with the Nebraska State Bar Association and was named Nebraska’s Outstanding Young Lawyer in 2015.',
    bio3:
      'Jaclyn lives in Alma, Nebraska with her husband (also a lawyer!) and three sons. In her spare time, she enjoys camping, kayaking, playing board games, and visiting her family in the South.',
  },
  {
    name: 'Henry Schenker',
    nameOnModal: 'Henry C. Schenker, Partner',
    phone: '(308) 425-6273',
    email: 'henry.schenker@gmail.com',
    img: './images/henry.jpg',
    modalName: 'henry',
    linkedin: '',
    bio1:
      'Henry has been practicing since 2011.  He specializes in Estate Planning, Probate, and Agricultural Law. Henry is also a licensed real estate broker in the State of Nebraska and owns and operates Farm & Ranch Land Brokers, L.L.C.',
    bio2:
      'Henry is originally from Pennsylvania and grew up playing classical piano. As an active outdoorsman in the woods of the Northeast, he earned his Eagle Scout award at the age of 16. Henry went on to obtain a B.A. in Business and French from Lake Forest College in Illinois and his Juris Doctorate from the University of South Carolina.',
    bio3:
      'Henry lives in Hildreth, Nebraska with his wife and blue heeler dog.  In his spare time, he enjoys playing the piano, riding horses, and enjoying the beautiful Nebraska outdoors.',
  },
  {
    name: 'Douglas R. Walker',
    nameOnModal: 'Douglas R. Walker, Partner',
    phone: '(308) 928-2165',
    email: 'ddjwlaw@yahoo.com',
    img: './images/doug.jpg',
    modalName: 'doug',
    linkedin: '',
    bio1:
      'Doug has been practicing since 1982. He specializes in Estate Planning and Probate. Doug also serves as municipal attorney for a wide variety of local cities and villages.',
    bio2:
      'Doug has resided in Nebraska his entire life, being raised in Harlan County and receiving both his B.S. in Agriculture and his Juris Doctorate from the University of Nebraska Lincoln.',
    bio3:
      'Doug lives in Alma, Nebraska but splits his workdays between our Alma, Oxford, and Hildreth offices. In his spare time, he is an unwavering volunteer at his church and dedicated fan of all Nebraska Cornhusker sports teams.',
  },
  {
    name: 'Patrick A. Duncan',
    nameOnModal: 'Patrick A. Duncan, Of Counsel',
    phone: '',
    email: '',
    img: './images/patrick.jpg',
    modalName: 'pat',
    bio1:
      'Pat was admitted to practice law in 1974. During his time as a practitioner, he served a wide variety of clients in just as many different areas of law with honesty, integrity, and a sense of humor.',
    bio2:
      'Pat left full-time practice in June 2015, but still consults on cases, prepares tax returns, and assists the firm with research and client contact. He and his wife, Carol, now reside in Lincoln, Nebraska, and together they spend every chance they get with their nine grandchildren.',
    bio3: '',
  },
]);

/* src/components/Card.svelte generated by Svelte v3.24.1 */

const css$4 = {
	code: "section.svelte-1vzim64.svelte-1vzim64{display:flex;flex-flow:row wrap;align-content:flex-start;justify-content:center;margin:auto;max-width:90vw}div.svelte-1vzim64>h4.svelte-1vzim64:hover{color:rgb(170, 174, 214)}h4.svelte-1vzim64.svelte-1vzim64{font-family:\"Fira Sans\", sans-serif;text-align:center}header.svelte-1vzim64.svelte-1vzim64{cursor:pointer}span.svelte-1vzim64.svelte-1vzim64{margin-right:0.1rem}.card-container.svelte-1vzim64.svelte-1vzim64{display:inline-flexbox;border:1px solid rgba(0, 0, 0, 0.08);justify-content:space-around;align-items:center;margin:1.5rem;width:259px;background-color:white}.image.svelte-1vzim64.svelte-1vzim64{width:100%;display:flex}.image.svelte-1vzim64 img.svelte-1vzim64{width:100%;height:100%;object-fit:cover}.details.svelte-1vzim64.svelte-1vzim64{font-size:1rem;font-family:\"Fira Sans\", sans-serif;padding:1rem;text-align:left}.view-more.svelte-1vzim64.svelte-1vzim64{text-decoration:none;font-style:italic}",
	map: "{\"version\":3,\"file\":\"Card.svelte\",\"sources\":[\"Card.svelte\"],\"sourcesContent\":[\"<script>\\n  export let name;\\n  export let image;\\n  export let phone;\\n  export let email;\\n</script>\\n\\n<style>\\n  section {\\n    display: flex;\\n    flex-flow: row wrap;\\n    align-content: flex-start;\\n    justify-content: center;\\n    margin: auto;\\n    max-width: 90vw;\\n  }\\n\\n  div > h4:hover {\\n    color: rgb(170, 174, 214);\\n  }\\n\\n  h4 {\\n    font-family: \\\"Fira Sans\\\", sans-serif;\\n    text-align: center;\\n  }\\n\\n  header {\\n    cursor: pointer;\\n  }\\n  span {\\n    margin-right: 0.1rem;\\n  }\\n  .card-container {\\n    /* width: 30%; */\\n    display: inline-flexbox;\\n    border: 1px solid rgba(0, 0, 0, 0.08);\\n    justify-content: space-around;\\n    align-items: center;\\n    margin: 1.5rem;\\n    width: 259px;\\n    background-color: white;\\n  }\\n\\n  .image {\\n    width: 100%;\\n    display: flex;\\n  }\\n\\n  .image img {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n  }\\n\\n  .details {\\n    font-size: 1rem;\\n    font-family: \\\"Fira Sans\\\", sans-serif;\\n    padding: 1rem;\\n    text-align: left;\\n  }\\n\\n  .view-more {\\n    text-decoration: none;\\n    font-style: italic;\\n  }\\n</style>\\n\\n<section>\\n  <div class=\\\"card-container uk-box-shadow-medium\\\">\\n    <header class=\\\"image uk-inline\\\" on:click>\\n      <img src={image} alt={name} />\\n      <div class=\\\"uk-overlay uk-overlay-primary uk-position-bottom\\\">\\n        <h4>{name}</h4>\\n      </div>\\n    </header>\\n    <div>\\n      <div class=\\\"details\\\">\\n        <div>\\n          {#if name == 'Patrick A. Duncan'}\\n            <span uk-icon=\\\"icon: more-vertical\\\" />\\n            Of Counsel\\n          {:else}\\n            <span uk-icon=\\\"icon: receiver\\\" title=\\\"Phone\\\" />\\n            <a href=\\\"tel:{phone}\\\">{phone}</a>\\n          {/if}\\n        </div>\\n        <div>\\n          {#if name == 'Patrick A. Duncan'}\\n            <span uk-icon=\\\"icon: more-vertical\\\" />\\n          {:else}\\n            <span uk-icon=\\\"icon: mail\\\" title=\\\"Email\\\" />\\n            <a href=\\\"mailto:{email}\\\">{email}</a>\\n          {/if}\\n        </div>\\n        <div>\\n          <span\\n            uk-icon=\\\"icon: info\\\"\\n            title=\\\"View more information about {name}\\\" />\\n          <a class=\\\"view-more\\\" on:click>View More</a>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\"],\"names\":[],\"mappings\":\"AAQE,OAAO,8BAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CAAC,IAAI,CACnB,aAAa,CAAE,UAAU,CACzB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,AACjB,CAAC,AAED,kBAAG,CAAG,iBAAE,MAAM,AAAC,CAAC,AACd,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,AAC3B,CAAC,AAED,EAAE,8BAAC,CAAC,AACF,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,UAAU,CAAE,MAAM,AACpB,CAAC,AAED,MAAM,8BAAC,CAAC,AACN,MAAM,CAAE,OAAO,AACjB,CAAC,AACD,IAAI,8BAAC,CAAC,AACJ,YAAY,CAAE,MAAM,AACtB,CAAC,AACD,eAAe,8BAAC,CAAC,AAEf,OAAO,CAAE,cAAc,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACrC,eAAe,CAAE,YAAY,CAC7B,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,MAAM,CACd,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,AACzB,CAAC,AAED,MAAM,8BAAC,CAAC,AACN,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,AACf,CAAC,AAED,qBAAM,CAAC,GAAG,eAAC,CAAC,AACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,AACnB,CAAC,AAED,QAAQ,8BAAC,CAAC,AACR,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,AAClB,CAAC,AAED,UAAU,8BAAC,CAAC,AACV,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,MAAM,AACpB,CAAC\"}"
};

const Card = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { name } = $$props;
	let { image } = $$props;
	let { phone } = $$props;
	let { email } = $$props;
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	if ($$props.phone === void 0 && $$bindings.phone && phone !== void 0) $$bindings.phone(phone);
	if ($$props.email === void 0 && $$bindings.email && email !== void 0) $$bindings.email(email);
	$$result.css.add(css$4);

	return `<section class="${"svelte-1vzim64"}"><div class="${"card-container uk-box-shadow-medium svelte-1vzim64"}"><header class="${"image uk-inline svelte-1vzim64"}"><img${add_attribute("src", image, 0)}${add_attribute("alt", name, 0)} class="${"svelte-1vzim64"}">
      <div class="${"uk-overlay uk-overlay-primary uk-position-bottom svelte-1vzim64"}"><h4 class="${"svelte-1vzim64"}">${escape(name)}</h4></div></header>
    <div><div class="${"details svelte-1vzim64"}"><div>${name == "Patrick A. Duncan"
	? `<span uk-icon="${"icon: more-vertical"}" class="${"svelte-1vzim64"}"></span>
            Of Counsel`
	: `<span uk-icon="${"icon: receiver"}" title="${"Phone"}" class="${"svelte-1vzim64"}"></span>
            <a href="${"tel:" + escape(phone)}">${escape(phone)}</a>`}</div>
        <div>${name == "Patrick A. Duncan"
	? `<span uk-icon="${"icon: more-vertical"}" class="${"svelte-1vzim64"}"></span>`
	: `<span uk-icon="${"icon: mail"}" title="${"Email"}" class="${"svelte-1vzim64"}"></span>
            <a href="${"mailto:" + escape(email)}">${escape(email)}</a>`}</div>
        <div><span uk-icon="${"icon: info"}" title="${"View more information about " + escape(name)}" class="${"svelte-1vzim64"}"></span>
          <a class="${"view-more svelte-1vzim64"}">View More</a></div></div></div></div></section>`;
});

/* src/components/ContactModal.svelte generated by Svelte v3.24.1 */

const css$5 = {
	code: "h2.svelte-u9r0dk,p.svelte-u9r0dk{font-family:\"Fira Sans\", sans-serif}",
	map: "{\"version\":3,\"file\":\"ContactModal.svelte\",\"sources\":[\"ContactModal.svelte\"],\"sourcesContent\":[\"<script>\\n  export let id;\\n  export let bio1;\\n  export let bio2;\\n  export let bio3;\\n  export let nameOnModal;\\n  export let linkedin;\\n</script>\\n\\n<style>\\n  h2,\\n  p {\\n    font-family: \\\"Fira Sans\\\", sans-serif;\\n  }\\n</style>\\n\\n<div {id} uk-modal>\\n  <div class=\\\"uk-modal-dialog uk-modal-body\\\">\\n    <h2 class=\\\"uk-modal-title\\\">{nameOnModal}</h2>\\n\\n    <p>{bio1}</p>\\n    <p>{bio2}</p>\\n    <p>{bio3}</p>\\n    {#if linkedin}\\n      <a href={linkedin} target=\\\"_blank\\\" title=\\\"View on LinkedIn\\\">\\n        <span uk-icon=\\\"icon: linkedin\\\" ratio=\\\"1.5\\\" />\\n      </a>\\n    {/if}\\n    <p class=\\\"uk-text-right\\\">\\n      <button class=\\\"uk-button uk-button-default uk-modal-close\\\" type=\\\"button\\\">\\n        Close\\n      </button>\\n    </p>\\n  </div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAUE,gBAAE,CACF,CAAC,cAAC,CAAC,AACD,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,AACtC,CAAC\"}"
};

const ContactModal = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { id } = $$props;
	let { bio1 } = $$props;
	let { bio2 } = $$props;
	let { bio3 } = $$props;
	let { nameOnModal } = $$props;
	let { linkedin } = $$props;
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
	if ($$props.bio1 === void 0 && $$bindings.bio1 && bio1 !== void 0) $$bindings.bio1(bio1);
	if ($$props.bio2 === void 0 && $$bindings.bio2 && bio2 !== void 0) $$bindings.bio2(bio2);
	if ($$props.bio3 === void 0 && $$bindings.bio3 && bio3 !== void 0) $$bindings.bio3(bio3);
	if ($$props.nameOnModal === void 0 && $$bindings.nameOnModal && nameOnModal !== void 0) $$bindings.nameOnModal(nameOnModal);
	if ($$props.linkedin === void 0 && $$bindings.linkedin && linkedin !== void 0) $$bindings.linkedin(linkedin);
	$$result.css.add(css$5);

	return `<div${add_attribute("id", id, 0)} uk-modal><div class="${"uk-modal-dialog uk-modal-body"}"><h2 class="${"uk-modal-title svelte-u9r0dk"}">${escape(nameOnModal)}</h2>

    <p class="${"svelte-u9r0dk"}">${escape(bio1)}</p>
    <p class="${"svelte-u9r0dk"}">${escape(bio2)}</p>
    <p class="${"svelte-u9r0dk"}">${escape(bio3)}</p>
    ${linkedin
	? `<a${add_attribute("href", linkedin, 0)} target="${"_blank"}" title="${"View on LinkedIn"}"><span uk-icon="${"icon: linkedin"}" ratio="${"1.5"}"></span></a>`
	: ``}
    <p class="${"uk-text-right svelte-u9r0dk"}"><button class="${"uk-button uk-button-default uk-modal-close"}" type="${"button"}">Close
      </button></p></div></div>`;
});

/* src/routes/about.svelte generated by Svelte v3.24.1 */

const css$6 = {
	code: "section.svelte-1y9d1hd.svelte-1y9d1hd{display:flex;flex-flow:row wrap;align-content:flex-start;justify-content:center;margin:auto;max-width:90vw}.header-container.svelte-1y9d1hd.svelte-1y9d1hd{display:flex;margin:auto;width:50vw;flex-direction:column;align-items:center;padding-top:2rem}.header-container.svelte-1y9d1hd>h2.svelte-1y9d1hd{margin-bottom:-0.5rem;font-family:\"Fira Sans\", sans-serif}.header-container.svelte-1y9d1hd>p.svelte-1y9d1hd{text-align:center;font-family:\"Fira Sans\", sans-serif}@media(max-width: 991.98px){.header-container.svelte-1y9d1hd.svelte-1y9d1hd{margin-top:2rem;text-align:center;width:90vw}}@media(max-width: 768px){.header-container.svelte-1y9d1hd.svelte-1y9d1hd{margin-top:-2rem}}@media(max-width: 740px){.header-container.svelte-1y9d1hd.svelte-1y9d1hd{margin-top:2rem}}@media(max-width: 667px){.header-container.svelte-1y9d1hd.svelte-1y9d1hd{margin-top:2rem;text-align:center;width:90vw}}@media(max-width: 569px){.header-container.svelte-1y9d1hd.svelte-1y9d1hd{margin-top:1.5rem;width:80vw}}@media(max-width: 414px){.header-container.svelte-1y9d1hd.svelte-1y9d1hd{margin-top:-2rem}}@media(max-width: 375px){.header-container.svelte-1y9d1hd.svelte-1y9d1hd{margin-top:-3rem}}@media(max-width: 320px){.header-container.svelte-1y9d1hd.svelte-1y9d1hd{margin-top:0rem}}",
	map: "{\"version\":3,\"file\":\"about.svelte\",\"sources\":[\"about.svelte\"],\"sourcesContent\":[\"<script>\\n  import { onDestroy } from \\\"svelte\\\";\\n  import aboutData from \\\"../stores/about-store\\\";\\n  import { fade } from \\\"svelte/transition\\\";\\n  import Card from \\\"../components/Card.svelte\\\";\\n  import ContactModal from \\\"../components/ContactModal.svelte\\\";\\n  import navStore from \\\"../stores/nav-store.js\\\";\\n  // let attorneys;\\n  let pageIsActive;\\n\\n  // const unsubscribeLawyer = aboutData.subscribe(lawyer => {\\n  //   attorneys = lawyer;\\n  // });\\n\\n  const unsubscribeNav = navStore.subscribe(activePage => {\\n    pageIsActive = activePage;\\n  });\\n\\n  navStore.update(() => {\\n    return { activePage: \\\"about\\\" };\\n  });\\n\\n  onDestroy(() => {\\n    if (unsubscribeNav) {\\n      unsubscribeNav();\\n    }\\n  });\\n\\n  function showModal(modalName) {\\n    console.log(modalName);\\n    UIkit.modal(`#${modalName}`).show();\\n  }\\n</script>\\n\\n<style>\\n  section {\\n    display: flex;\\n    flex-flow: row wrap;\\n    align-content: flex-start;\\n    justify-content: center;\\n    margin: auto;\\n    max-width: 90vw;\\n  }\\n  .header-container {\\n    display: flex;\\n    margin: auto;\\n    width: 50vw;\\n    flex-direction: column;\\n    align-items: center;\\n    padding-top: 2rem;\\n  }\\n  .header-container > h2 {\\n    margin-bottom: -0.5rem;\\n    font-family: \\\"Fira Sans\\\", sans-serif;\\n  }\\n  .header-container > p {\\n    text-align: center;\\n    font-family: \\\"Fira Sans\\\", sans-serif;\\n  }\\n\\n  @media (max-width: 991.98px) {\\n    .header-container {\\n      margin-top: 2rem;\\n      text-align: center;\\n      width: 90vw;\\n    }\\n  }\\n\\n  @media (max-width: 768px) {\\n    .header-container {\\n      margin-top: -2rem;\\n    }\\n  }\\n\\n  @media (max-width: 740px) {\\n    .header-container {\\n      margin-top: 2rem;\\n    }\\n  }\\n\\n  @media (max-width: 667px) {\\n    .header-container {\\n      margin-top: 2rem;\\n      text-align: center;\\n      width: 90vw;\\n    }\\n  }\\n\\n  @media (max-width: 569px) {\\n    .header-container {\\n      margin-top: 1.5rem;\\n      width: 80vw;\\n    }\\n  }\\n  @media (max-width: 414px) {\\n    .header-container {\\n      margin-top: -2rem;\\n    }\\n  }\\n  @media (max-width: 375px) {\\n    .header-container {\\n      margin-top: -3rem;\\n    }\\n  }\\n\\n  @media (max-width: 320px) {\\n    .header-container {\\n      margin-top: 0rem;\\n    }\\n  }\\n</style>\\n\\n<svelte:head>\\n  <title>About</title>\\n</svelte:head>\\n<div class=\\\"header-container\\\" in:fade={{ duration: 400, delay: 100 }}>\\n  <h2>Meet Our Experienced Legal Team</h2>\\n  <p>\\n    All of our lawyers and experienced professional staff are focused on\\n    providing you with first-rate legal representation and services, regardless\\n    of the size or complexity of your case.\\n  </p>\\n</div>\\n<!-- card -->\\n<section in:fade={{ duration: 400, delay: 100 }}>\\n  {#each $aboutData as attorney}\\n    <Card\\n      name={attorney.name}\\n      image={attorney.img}\\n      phone={attorney.phone}\\n      email={attorney.email}\\n      location={attorney.location}\\n      linkedin={attorney.linkedin}\\n      facebook={attorney.facebook}\\n      twitter={attorney.twitter}\\n      instagram={attorney.instagram}\\n      on:click={showModal(attorney.modalName)} />\\n    <ContactModal\\n      id={attorney.modalName}\\n      bio1={attorney.bio1}\\n      bio2={attorney.bio2}\\n      bio3={attorney.bio3}\\n      nameOnModal={attorney.nameOnModal}\\n      linkedin={attorney.linkedin} />\\n  {/each}\\n</section>\\n\"],\"names\":[],\"mappings\":\"AAmCE,OAAO,8BAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CAAC,IAAI,CACnB,aAAa,CAAE,UAAU,CACzB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,AACjB,CAAC,AACD,iBAAiB,8BAAC,CAAC,AACjB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,IAAI,AACnB,CAAC,AACD,gCAAiB,CAAG,EAAE,eAAC,CAAC,AACtB,aAAa,CAAE,OAAO,CACtB,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,AACtC,CAAC,AACD,gCAAiB,CAAG,CAAC,eAAC,CAAC,AACrB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,MAAM,AAAC,YAAY,QAAQ,CAAC,AAAC,CAAC,AAC5B,iBAAiB,8BAAC,CAAC,AACjB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,AACb,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,iBAAiB,8BAAC,CAAC,AACjB,UAAU,CAAE,KAAK,AACnB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,iBAAiB,8BAAC,CAAC,AACjB,UAAU,CAAE,IAAI,AAClB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,iBAAiB,8BAAC,CAAC,AACjB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,AACb,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,iBAAiB,8BAAC,CAAC,AACjB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,AACb,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,iBAAiB,8BAAC,CAAC,AACjB,UAAU,CAAE,KAAK,AACnB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,iBAAiB,8BAAC,CAAC,AACjB,UAAU,CAAE,KAAK,AACnB,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,iBAAiB,8BAAC,CAAC,AACjB,UAAU,CAAE,IAAI,AAClB,CAAC,AACH,CAAC\"}"
};

const About = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $aboutData = get_store_value(aboutData);

	// const unsubscribeLawyer = aboutData.subscribe(lawyer => {
	//   attorneys = lawyer;
	// });
	const unsubscribeNav = navStore.subscribe(activePage => {
	});

	navStore.update(() => {
		return { activePage: "about" };
	});

	onDestroy(() => {
		if (unsubscribeNav) {
			unsubscribeNav();
		}
	});

	$$result.css.add(css$6);

	return `${($$result.head += `${($$result.title = `<title>About</title>`, "")}`, "")}
<div class="${"header-container svelte-1y9d1hd"}"><h2 class="${"svelte-1y9d1hd"}">Meet Our Experienced Legal Team</h2>
  <p class="${"svelte-1y9d1hd"}">All of our lawyers and experienced professional staff are focused on
    providing you with first-rate legal representation and services, regardless
    of the size or complexity of your case.
  </p></div>

<section class="${"svelte-1y9d1hd"}">${each($aboutData, attorney => `${validate_component(Card, "Card").$$render(
		$$result,
		{
			name: attorney.name,
			image: attorney.img,
			phone: attorney.phone,
			email: attorney.email,
			location: attorney.location,
			linkedin: attorney.linkedin,
			facebook: attorney.facebook,
			twitter: attorney.twitter,
			instagram: attorney.instagram
		},
		{},
		{}
	)}
    ${validate_component(ContactModal, "ContactModal").$$render(
		$$result,
		{
			id: attorney.modalName,
			bio1: attorney.bio1,
			bio2: attorney.bio2,
			bio3: attorney.bio3,
			nameOnModal: attorney.nameOnModal,
			linkedin: attorney.linkedin
		},
		{},
		{}
	)}`)}</section>`;
});

var component_3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': About
});

/* src/components/Nav.svelte generated by Svelte v3.24.1 */

const css$7 = {
	code: "nav.svelte-gulcyw.svelte-gulcyw{position:fixed;width:100%;top:0;left:0;z-index:1;display:flex !important;flex-flow:row wrap;background-color:rgb(65, 107, 176) !important}li.uk-active.svelte-gulcyw>a.svelte-gulcyw,a.svelte-gulcyw.svelte-gulcyw:hover{color:rgb(170, 174, 214) !important}a.svelte-gulcyw.svelte-gulcyw{color:white !important;font-family:\"Fira Sans\", sans-serif !important;font-size:1.2rem}.nav-logo.svelte-gulcyw.svelte-gulcyw{max-width:75px;position:fixed;top:5px;left:5px}.facebook-logo.svelte-gulcyw.svelte-gulcyw{position:fixed;top:25px;right:25px}.mobile-nav.svelte-gulcyw.svelte-gulcyw{visibility:hidden}@media(max-width: 660px){.main-nav.svelte-gulcyw.svelte-gulcyw{display:none !important}.mobile-nav.svelte-gulcyw.svelte-gulcyw{visibility:visible;position:fixed;width:100%;top:0;left:0;z-index:1;height:50px;background-color:rgb(65, 107, 176) !important}.menu-icon.svelte-gulcyw.svelte-gulcyw{position:fixed;top:5px;left:5px;color:white}.nav-logo.svelte-gulcyw.svelte-gulcyw{max-width:40px;position:fixed;top:5px;left:87%}}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\n  import { onMount, onDestroy } from \\\"svelte\\\";\\n  import navStore from \\\"../stores/nav-store.js\\\";\\n  let mobile = true;\\n  let homeIsActive;\\n  let aboutIsActive;\\n  let practiceIsActive;\\n  let locationsIsActive;\\n  let pageIsActive;\\n\\n  const unsubscribeNav = navStore.subscribe(activeClass => {\\n    pageIsActive = activeClass;\\n  });\\n\\n  onDestroy(() => {\\n    if (unsubscribeNav) {\\n      unsubscribeNav();\\n    }\\n  });\\n\\n  function closeSideNav() {\\n    UIkit.offcanvas(\\\"#mobile-sidenav\\\").hide();\\n  }\\n</script>\\n\\n<style>\\n  nav {\\n    position: fixed;\\n    width: 100%;\\n    top: 0;\\n    left: 0;\\n    z-index: 1;\\n    display: flex !important;\\n    flex-flow: row wrap;\\n    background-color: rgb(65, 107, 176) !important;\\n  }\\n  li.uk-active > a,\\n  a:hover {\\n    color: rgb(170, 174, 214) !important;\\n  }\\n  a {\\n    color: white !important;\\n    font-family: \\\"Fira Sans\\\", sans-serif !important;\\n    font-size: 1.2rem;\\n  }\\n\\n  .nav-logo {\\n    max-width: 75px;\\n    position: fixed;\\n    top: 5px;\\n    left: 5px;\\n  }\\n  .facebook-logo {\\n    position: fixed;\\n    top: 25px;\\n    right: 25px;\\n  }\\n  .mobile-nav {\\n    visibility: hidden;\\n  }\\n\\n  @media (max-width: 660px) {\\n    .main-nav {\\n      display: none !important;\\n    }\\n    .mobile-nav {\\n      visibility: visible;\\n      position: fixed;\\n      width: 100%;\\n      top: 0;\\n      left: 0;\\n      z-index: 1;\\n      height: 50px;\\n      background-color: rgb(65, 107, 176) !important;\\n    }\\n    .menu-icon {\\n      position: fixed;\\n      top: 5px;\\n      left: 5px;\\n      color: white;\\n    }\\n    .nav-logo {\\n      max-width: 40px;\\n      position: fixed;\\n      top: 5px;\\n      left: 87%;\\n    }\\n  }\\n</style>\\n\\n<nav class=\\\"uk-navbar-container main-nav\\\" uk-navbar>\\n  <a class=\\\"uk-navbar-item uk-logo\\\" href=\\\"/\\\" title=\\\"Home\\\">\\n    <img class=\\\"nav-logo\\\" src=\\\"./images/logos/dwsd-logo.jpg\\\" alt=\\\"DSWD Logo\\\" />\\n  </a>\\n  <div class=\\\"uk-navbar-center\\\">\\n    <ul class=\\\"uk-navbar-nav\\\">\\n      <li\\n        class={pageIsActive.activePage == 'home' ? 'uk-active' : ''}\\n        title=\\\"Home\\\">\\n        <a href=\\\"/\\\">Home</a>\\n      </li>\\n      <li\\n        class={pageIsActive.activePage == 'about' ? 'uk-active' : ''}\\n        title=\\\"View our Team\\\">\\n        <a href=\\\"about\\\">About</a>\\n      </li>\\n      <li\\n        class={pageIsActive.activePage == 'practice' ? 'uk-active' : ''}\\n        title=\\\"View our Areas of Practices\\\">\\n        <a href=\\\"practice\\\">Areas of Practice</a>\\n      </li>\\n      <li\\n        class={pageIsActive.activePage == 'locations' ? 'uk-active' : ''}\\n        title=\\\"View our Locations\\\">\\n        <a href=\\\"locations\\\">Locations</a>\\n      </li>\\n    </ul>\\n  </div>\\n  <a\\n    class=\\\"facebook-logo\\\"\\n    href=\\\"https://www.facebook.com/DucanWalkerSchenkerDaakePCLLO/\\\"\\n    target=\\\"_blank\\\"\\n    rel=\\\"noreferrer\\\"\\n    title=\\\"Visit our Facebook page\\\">\\n    <span uk-icon=\\\"icon: facebook\\\" ratio=\\\"1.3\\\" />\\n  </a>\\n</nav>\\n\\n<!-- Mobile Nav-->\\n<nav class=\\\"mobile-nav\\\">\\n  <div>\\n    <span\\n      uk-icon=\\\"icon: menu\\\"\\n      uk-toggle=\\\"target: #mobile-sidenav\\\"\\n      ratio=\\\"2\\\"\\n      class=\\\"menu-icon\\\" />\\n    <a class=\\\"\\\" href=\\\"/\\\" title=\\\"Home\\\">\\n      <img\\n        class=\\\"nav-logo\\\"\\n        src=\\\"./images/logos/dwsd-logo.jpg\\\"\\n        alt=\\\"DSWD Logo\\\" />\\n    </a>\\n  </div>\\n  <div id=\\\"mobile-sidenav\\\" uk-offcanvas>\\n    <div class=\\\"uk-offcanvas-bar\\\">\\n      <ul class=\\\"uk-nav uk-nav-default\\\">\\n        <li\\n          class={pageIsActive.activePage == 'home' ? 'uk-active' : ''}\\n          title=\\\"Home\\\">\\n          <a href=\\\"/\\\" on:click={closeSideNav}>Home</a>\\n        </li>\\n        <li\\n          class={pageIsActive.activePage == 'about' ? 'uk-active' : ''}\\n          title=\\\"View our Team\\\">\\n          <a href=\\\"about\\\" on:click={closeSideNav}>About</a>\\n        </li>\\n        <li\\n          class={pageIsActive.activePage == 'practice' ? 'uk-active' : ''}\\n          title=\\\"View our Areas of Practices\\\">\\n          <a href=\\\"practice\\\" on:click={closeSideNav}>Areas of Practice</a>\\n        </li>\\n        <li\\n          class={pageIsActive.activePage == 'locations' ? 'uk-active' : ''}\\n          title=\\\"View our Locations\\\">\\n          <a href=\\\"locations\\\" on:click={closeSideNav}>Locations</a>\\n        </li>\\n        <li>\\n          <a\\n            href=\\\"https://www.facebook.com/DucanWalkerSchenkerDaakePCLLO/\\\"\\n            target=\\\"_blank\\\"\\n            title=\\\"Visit our Facebook page\\\"\\n            rel=\\\"noreferrer\\\"\\n            on:click={closeSideNav}>\\n            <span uk-icon=\\\"icon: facebook\\\" />\\n          </a>\\n        </li>\\n      </ul>\\n    </div>\\n  </div>\\n</nav>\\n\"],\"names\":[],\"mappings\":\"AA0BE,GAAG,4BAAC,CAAC,AACH,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CAAC,UAAU,CACxB,SAAS,CAAE,GAAG,CAAC,IAAI,CACnB,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AAChD,CAAC,AACD,EAAE,wBAAU,CAAG,eAAC,CAChB,6BAAC,MAAM,AAAC,CAAC,AACP,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AACD,CAAC,4BAAC,CAAC,AACD,KAAK,CAAE,KAAK,CAAC,UAAU,CACvB,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CAAC,UAAU,CAC/C,SAAS,CAAE,MAAM,AACnB,CAAC,AAED,SAAS,4BAAC,CAAC,AACT,SAAS,CAAE,IAAI,CACf,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,AACX,CAAC,AACD,cAAc,4BAAC,CAAC,AACd,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,AACb,CAAC,AACD,WAAW,4BAAC,CAAC,AACX,UAAU,CAAE,MAAM,AACpB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,SAAS,4BAAC,CAAC,AACT,OAAO,CAAE,IAAI,CAAC,UAAU,AAC1B,CAAC,AACD,WAAW,4BAAC,CAAC,AACX,UAAU,CAAE,OAAO,CACnB,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AAChD,CAAC,AACD,UAAU,4BAAC,CAAC,AACV,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,KAAK,AACd,CAAC,AACD,SAAS,4BAAC,CAAC,AACT,SAAS,CAAE,IAAI,CACf,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,AACX,CAAC,AACH,CAAC\"}"
};

const Nav = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let pageIsActive;

	const unsubscribeNav = navStore.subscribe(activeClass => {
		pageIsActive = activeClass;
	});

	onDestroy(() => {
		if (unsubscribeNav) {
			unsubscribeNav();
		}
	});

	$$result.css.add(css$7);

	return `<nav class="${"uk-navbar-container main-nav svelte-gulcyw"}" uk-navbar><a class="${"uk-navbar-item uk-logo svelte-gulcyw"}" href="${"/"}" title="${"Home"}"><img class="${"nav-logo svelte-gulcyw"}" src="${"./images/logos/dwsd-logo.jpg"}" alt="${"DSWD Logo"}"></a>
  <div class="${"uk-navbar-center"}"><ul class="${"uk-navbar-nav"}"><li class="${escape(null_to_empty(pageIsActive.activePage == "home" ? "uk-active" : "")) + " svelte-gulcyw"}" title="${"Home"}"><a href="${"/"}" class="${"svelte-gulcyw"}">Home</a></li>
      <li class="${escape(null_to_empty(pageIsActive.activePage == "about" ? "uk-active" : "")) + " svelte-gulcyw"}" title="${"View our Team"}"><a href="${"about"}" class="${"svelte-gulcyw"}">About</a></li>
      <li class="${escape(null_to_empty(pageIsActive.activePage == "practice" ? "uk-active" : "")) + " svelte-gulcyw"}" title="${"View our Areas of Practices"}"><a href="${"practice"}" class="${"svelte-gulcyw"}">Areas of Practice</a></li>
      <li class="${escape(null_to_empty(pageIsActive.activePage == "locations"
	? "uk-active"
	: "")) + " svelte-gulcyw"}" title="${"View our Locations"}"><a href="${"locations"}" class="${"svelte-gulcyw"}">Locations</a></li></ul></div>
  <a class="${"facebook-logo svelte-gulcyw"}" href="${"https://www.facebook.com/DucanWalkerSchenkerDaakePCLLO/"}" target="${"_blank"}" rel="${"noreferrer"}" title="${"Visit our Facebook page"}"><span uk-icon="${"icon: facebook"}" ratio="${"1.3"}"></span></a></nav>


<nav class="${"mobile-nav svelte-gulcyw"}"><div><span uk-icon="${"icon: menu"}" uk-toggle="${"target: #mobile-sidenav"}" ratio="${"2"}" class="${"menu-icon svelte-gulcyw"}"></span>
    <a class="${" svelte-gulcyw"}" href="${"/"}" title="${"Home"}"><img class="${"nav-logo svelte-gulcyw"}" src="${"./images/logos/dwsd-logo.jpg"}" alt="${"DSWD Logo"}"></a></div>
  <div id="${"mobile-sidenav"}" uk-offcanvas><div class="${"uk-offcanvas-bar"}"><ul class="${"uk-nav uk-nav-default"}"><li class="${escape(null_to_empty(pageIsActive.activePage == "home" ? "uk-active" : "")) + " svelte-gulcyw"}" title="${"Home"}"><a href="${"/"}" class="${"svelte-gulcyw"}">Home</a></li>
        <li class="${escape(null_to_empty(pageIsActive.activePage == "about" ? "uk-active" : "")) + " svelte-gulcyw"}" title="${"View our Team"}"><a href="${"about"}" class="${"svelte-gulcyw"}">About</a></li>
        <li class="${escape(null_to_empty(pageIsActive.activePage == "practice" ? "uk-active" : "")) + " svelte-gulcyw"}" title="${"View our Areas of Practices"}"><a href="${"practice"}" class="${"svelte-gulcyw"}">Areas of Practice</a></li>
        <li class="${escape(null_to_empty(pageIsActive.activePage == "locations"
	? "uk-active"
	: "")) + " svelte-gulcyw"}" title="${"View our Locations"}"><a href="${"locations"}" class="${"svelte-gulcyw"}">Locations</a></li>
        <li><a href="${"https://www.facebook.com/DucanWalkerSchenkerDaakePCLLO/"}" target="${"_blank"}" title="${"Visit our Facebook page"}" rel="${"noreferrer"}" class="${"svelte-gulcyw"}"><span uk-icon="${"icon: facebook"}"></span></a></li></ul></div></div></nav>`;
});

/* src/routes/_layout.svelte generated by Svelte v3.24.1 */

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<div class="${"grid"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
  <main>${$$slots.default ? $$slots.default({}) : ``}</main></div>`;
});

var root_comp = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Layout
});

/* src/routes/_error.svelte generated by Svelte v3.24.1 */

const css$8 = {
	code: "h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let status;\\n\\texport let error;\\n\\n\\tconst dev = undefined === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAQC,gBAAE,CAAE,CAAC,cAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,cAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$8);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1 class="${"svelte-8od9u6"}">${escape(status)}</h1>

<p class="${"svelte-8od9u6"}">${escape(error.message)}</p>

${ ``}`;
});

// This file is generated by Sapper — do not edit it!

const manifest = {
	server_routes: [
		
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: component_0 }
			]
		},

		{
			// locations.svelte
			pattern: /^\/locations\/?$/,
			parts: [
				{ name: "locations", file: "locations.svelte", component: component_1 }
			]
		},

		{
			// practice.svelte
			pattern: /^\/practice\/?$/,
			parts: [
				{ name: "practice", file: "practice.svelte", component: component_2 }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: component_3 }
			]
		}
	],

	root_comp,
	error: Error$1
};

const build_dir = "__sapper__/build";

const CONTEXT_KEY = {};

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.24.1 */

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

function get_server_route_handler(routes) {
	async function handle_route(route, req, res, next) {
		req.params = route.params(route.pattern.exec(req.path));

		const method = req.method.toLowerCase();
		// 'delete' cannot be exported from a module because it is a keyword,
		// so check for 'del' instead
		const method_export = method === 'delete' ? 'del' : method;
		const handle_method = route.handlers[method_export];
		if (handle_method) {
			if (process.env.SAPPER_EXPORT) {
				const { write, end, setHeader } = res;
				const chunks = [];
				const headers = {};

				// intercept data so that it can be exported
				res.write = function(chunk) {
					chunks.push(Buffer.from(chunk));
					write.apply(res, arguments);
				};

				res.setHeader = function(name, value) {
					headers[name.toLowerCase()] = value;
					setHeader.apply(res, arguments);
				};

				res.end = function(chunk) {
					if (chunk) chunks.push(Buffer.from(chunk));
					end.apply(res, arguments);

					process.send({
						__sapper__: true,
						event: 'file',
						url: req.url,
						method: req.method,
						status: res.statusCode,
						type: headers['content-type'],
						body: Buffer.concat(chunks).toString()
					});
				};
			}

			const handle_next = (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(err.message);
				} else {
					process.nextTick(next);
				}
			};

			try {
				await handle_method(req, res, handle_next);
			} catch (err) {
				console.error(err);
				handle_next(err);
			}
		} else {
			// no matching handler for method
			process.nextTick(next);
		}
	}

	return function find_route(req, res, next) {
		for (const route of routes) {
			if (route.pattern.test(req.path)) {
				handle_route(route, req, res, next);
				return;
			}
		}

		next();
	};
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var cookie = {
	parse: parse_1,
	serialize: serialize_1
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return thing.toString();
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

function get_page_handler(
	manifest,
	session_getter
) {
	const get_build_info =  (assets => () => assets)(JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8')));

	const template =  (str => () => str)(read_template(build_dir));

	const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message =  'Internal server error';

		res.statusCode = 500;
		res.end(`<pre>${message}</pre>`);
	}

	function handle_error(req, res, statusCode, error) {
		handle_page({
			pattern: null,
			parts: [
				{ name: null, component: error_route }
			]
		}, req, res, statusCode, error || new Error('Unknown error in preload function'));
	}

	async function handle_page(page, req, res, status = 200, error = null) {
		const is_service_worker_index = req.path === '/service-worker-index.html';
		const build_info









 = get_build_info();

		res.setHeader('Content-Type', 'text/html');

		// preload main.js and current route
		// TODO detect other stuff we can preload like fonts?
		let preload_files = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
		if (!error && !is_service_worker_index) {
			page.parts.forEach(part => {
				if (!part) return;

				// using concat because it could be a string or an array. thanks webpack!
				preload_files = preload_files.concat(build_info.assets[part.name]);
			});
		}

		let es6_preload = false;
		if (build_info.bundler === 'rollup') {

			es6_preload = true;

			const route = page.parts[page.parts.length - 1].file;

			// JS
			preload_files = preload_files.concat(build_info.dependencies[route]);

			// CSS
			preload_files = preload_files.concat(build_info.css.main);
			preload_files = preload_files.concat(build_info.css.chunks[route]);
		}

		const link = preload_files
			.filter((v, i, a) => a.indexOf(v) === i)        // remove any duplicates
			.filter(file => file && !file.match(/\.map$/))  // exclude source maps
			.map((file) => {
				const as = /\.css$/.test(file) ? 'style' : 'script';
				const rel = es6_preload && as === 'script' ? 'modulepreload' : 'preload';
				return `<${req.baseUrl}/client/${file}>;rel="${rel}";as="${as}"`;
			})
			.join(', ');

		res.setHeader('Link', link);

		let session;
		try {
			session = await session_getter(req, res);
		} catch (err) {
			return bail(req, res, err);
		}

		let redirect;
		let preload_error;

		const preload_context = {
			redirect: (statusCode, location) => {
				if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
					throw new Error(`Conflicting redirects`);
				}
				location = location.replace(/^\//g, ''); // leading slash (only)
				redirect = { statusCode, location };
			},
			error: (statusCode, message) => {
				preload_error = { statusCode, message };
			},
			fetch: (url, opts) => {
				const parsed = new Url.URL(url, `http://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' :''}`);

				opts = Object.assign({}, opts);

				const include_credentials = (
					opts.credentials === 'include' ||
					opts.credentials !== 'omit' && parsed.origin === `http://127.0.0.1:${process.env.PORT}`
				);

				if (include_credentials) {
					opts.headers = Object.assign({}, opts.headers);

					const cookies = Object.assign(
						{},
						cookie.parse(req.headers.cookie || ''),
						cookie.parse(opts.headers.cookie || '')
					);

					const set_cookie = res.getHeader('Set-Cookie');
					(Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach(str => {
						const match = /([^=]+)=([^;]+)/.exec(str);
						if (match) cookies[match[1]] = match[2];
					});

					const str = Object.keys(cookies)
						.map(key => `${key}=${cookies[key]}`)
						.join('; ');

					opts.headers.cookie = str;

					if (!opts.headers.authorization && req.headers.authorization) {
						opts.headers.authorization = req.headers.authorization;
					}
				}

				return fetch(parsed.href, opts);
			}
		};

		let preloaded;
		let match;
		let params;

		try {
			const root_preload = manifest.root_comp.preload || (() => {});
			const root_preloaded = root_preload.call(preload_context, {
					host: req.headers.host,
					path: req.path,
					query: req.query,
					params: {}
				}, session);

			match = error ? null : page.pattern.exec(req.path);


			let toPreload = [root_preloaded];
			if (!is_service_worker_index) {
				toPreload = toPreload.concat(page.parts.map(part => {
					if (!part) return null;

					// the deepest level is used below, to initialise the store
					params = part.params ? part.params(match) : {};

					return part.component.preload
						? part.component.preload.call(preload_context, {
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}, session)
						: {};
				}));
			}

			preloaded = await Promise.all(toPreload);
		} catch (err) {
			if (error) {
				return bail(req, res, err)
			}

			preload_error = { statusCode: 500, message: err };
			preloaded = []; // appease TypeScript
		}

		try {
			if (redirect) {
				const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);

				res.statusCode = redirect.statusCode;
				res.setHeader('Location', location);
				res.end();

				return;
			}

			if (preload_error) {
				handle_error(req, res, preload_error.statusCode, preload_error.message);
				return;
			}

			const segments = req.path.split('/').filter(Boolean);

			// TODO make this less confusing
			const layout_segments = [segments[0]];
			let l = 1;

			page.parts.forEach((part, i) => {
				layout_segments[l] = segments[i + 1];
				if (!part) return null;
				l++;
			});

			const props = {
				stores: {
					page: {
						subscribe: writable({
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: writable(null).subscribe
					},
					session: writable(session)
				},
				segments: layout_segments,
				status: error ? status : 200,
				error: error ? error instanceof Error ? error : { message: error } : null,
				level0: {
					props: preloaded[0]
				},
				level1: {
					segment: segments[0],
					props: {}
				}
			};

			if (!is_service_worker_index) {
				let l = 1;
				for (let i = 0; i < page.parts.length; i += 1) {
					const part = page.parts[i];
					if (!part) continue;

					props[`level${l++}`] = {
						component: part.component.default,
						props: preloaded[i + 1] || {},
						segment: segments[i]
					};
				}
			}

			const { html, head, css } = App.render(props);

			const serialized = {
				preloaded: `[${preloaded.map(data => try_serialize(data, err => {
					console.error(`Failed to serialize preloaded data to transmit to the client at the /${segments.join('/')} route: ${err.message}`);
					console.warn('The client will re-render over the server-rendered page fresh instead of continuing where it left off. See https://sapper.svelte.dev/docs#Return_value for more information');
				})).join(',')}]`,
				session: session && try_serialize(session, err => {
					throw new Error(`Failed to serialize session data: ${err.message}`);
				}),
				error: error && serialize_error(props.error)
			};

			let script = `__SAPPER__={${[
				error && `error:${serialized.error},status:${status}`,
				`baseUrl:"${req.baseUrl}"`,
				serialized.preloaded && `preloaded:${serialized.preloaded}`,
				serialized.session && `session:${serialized.session}`
			].filter(Boolean).join(',')}};`;

			if (has_service_worker) {
				script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
			}

			const file = [].concat(build_info.assets.main).filter(file => file && /\.js$/.test(file))[0];
			const main = `${req.baseUrl}/client/${file}`;

			if (build_info.bundler === 'rollup') {
				if (build_info.legacy_assets) {
					const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
					script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
				} else {
					script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
				}
			} else {
				script += `</script><script src="${main}" defer>`;
			}

			let styles;

			// TODO make this consistent across apps
			// TODO embed build_info in placeholder.ts
			if (build_info.css && build_info.css.main) {
				const css_chunks = new Set();
				if (build_info.css.main) css_chunks.add(build_info.css.main);
				page.parts.forEach(part => {
					if (!part) return;
					const css_chunks_for_part = build_info.css.chunks[part.file];

					if (css_chunks_for_part) {
						css_chunks_for_part.forEach(file => {
							css_chunks.add(file);
						});
					}
				});

				styles = Array.from(css_chunks)
					.map(href => `<link rel="stylesheet" href="client/${href}">`)
					.join('');
			} else {
				styles = (css && css.code ? `<style>${css.code}</style>` : '');
			}

			// users can set a CSP nonce using res.locals.nonce
			const nonce_attr = (res.locals && res.locals.nonce) ? ` nonce="${res.locals.nonce}"` : '';

			const body = template()
				.replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
				.replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
				.replace('%sapper.html%', () => html)
				.replace('%sapper.head%', () => head)
				.replace('%sapper.styles%', () => styles);

			res.statusCode = status;
			res.end(body);
		} catch(err) {
			if (error) {
				bail(req, res, err);
			} else {
				handle_error(req, res, 500, err);
			}
		}
	}

	return function find_route(req, res, next) {
		if (req.path === '/service-worker-index.html') {
			const homePage = pages.find(page => page.pattern.test('/'));
			handle_page(homePage, req, res);
			return;
		}

		for (const page of pages) {
			if (page.pattern.test(req.path)) {
				handle_page(page, req, res);
				return;
			}
		}

		handle_error(req, res, 404, 'Not found');
	};
}

function read_template(dir = build_dir) {
	return fs.readFileSync(`${dir}/template.html`, 'utf-8');
}

function try_serialize(data, fail) {
	try {
		return devalue(data);
	} catch (err) {
		if (fail) fail(err);
		return null;
	}
}

// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
	if (!error) return null;
	let serialized = try_serialize(error);
	if (!serialized) {
		const { name, message, stack } = error ;
		serialized = try_serialize({ name, message, stack });
	}
	if (!serialized) {
		serialized = '{}';
	}
	return serialized;
}

function middleware(opts


 = {}) {
	const { session, ignore } = opts;

	let emitted_basepath = false;

	return compose_handlers(ignore, [
		(req, res, next) => {
			if (req.baseUrl === undefined) {
				let { originalUrl } = req;
				if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
					originalUrl += '/';
				}

				req.baseUrl = originalUrl
					? originalUrl.slice(0, -req.url.length)
					: '';
			}

			if (!emitted_basepath && process.send) {
				process.send({
					__sapper__: true,
					event: 'basepath',
					basepath: req.baseUrl
				});

				emitted_basepath = true;
			}

			if (req.path === undefined) {
				req.path = req.url.replace(/\?.*/, '');
			}

			next();
		},

		fs.existsSync(path.join(build_dir, 'service-worker.js')) && serve({
			pathname: '/service-worker.js',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		fs.existsSync(path.join(build_dir, 'service-worker.js.map')) && serve({
			pathname: '/service-worker.js.map',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		serve({
			prefix: '/client/',
			cache_control:  'max-age=31536000, immutable'
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop$1)
	].filter(Boolean));
}

function compose_handlers(ignore, handlers) {
	const total = handlers.length;

	function nth_handler(n, req, res, next) {
		if (n >= total) {
			return next();
		}

		handlers[n](req, res, () => nth_handler(n+1, req, res, next));
	}

	return !ignore
		? (req, res, next) => nth_handler(0, req, res, next)
		: (req, res, next) => {
			if (should_ignore(req.path, ignore)) {
				next();
			} else {
				nth_handler(0, req, res, next);
			}
		};
}

function should_ignore(uri, val) {
	if (Array.isArray(val)) return val.some(x => should_ignore(uri, x));
	if (val instanceof RegExp) return val.test(uri);
	if (typeof val === 'function') return val(uri);
	return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}

function serve({ prefix, pathname, cache_control }



) {
	const filter = pathname
		? (req) => req.path === pathname
		: (req) => req.path.startsWith(prefix);

	const cache = new Map();

	const read =  (file) => (cache.has(file) ? cache : cache.set(file, fs.readFileSync(path.join(build_dir, file)))).get(file);

	return (req, res, next) => {
		if (filter(req)) {
			const type = lite.getType(req.path);

			try {
				const file = path.posix.normalize(decodeURIComponent(req.path));
				const data = read(file);

				res.setHeader('Content-Type', type);
				res.setHeader('Cache-Control', cache_control);
				res.end(data);
			} catch (err) {
				if (err.code === 'ENOENT') {
					next();
				} else {
					console.error(err);

					res.statusCode = 500;
					res.end('an error occurred while reading a static file from disk');
				}
			}
		} else {
			next();
		}
	};
}

function noop$1(){}

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
