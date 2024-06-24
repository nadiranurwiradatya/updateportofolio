import {
  $ as Eo,
  $a as J,
  A as et,
  Aa as Ei,
  Ab as Ho,
  B as je,
  Ba as Io,
  Bb as Wo,
  C as Dn,
  Ca as kt,
  Cb as D,
  D as Sn,
  Da as ie,
  Db as Yo,
  E as Y,
  Ea as x,
  Eb as Un,
  F as yo,
  Fa as Oi,
  Fb as Go,
  G as Mn,
  Ga as Tt,
  Gb as Zo,
  H as xt,
  Ha as ko,
  Hb as _e,
  I as xe,
  Ia as Di,
  Ib as qo,
  J as Rn,
  Ja as Si,
  Jb as Xo,
  K as wo,
  Ka as Mi,
  Kb as Ko,
  L as Co,
  La as S,
  Lb as G,
  M as Ci,
  Ma as To,
  Mb as Qo,
  N as fe,
  Na as nt,
  Nb as Jo,
  O as te,
  Oa as Le,
  Ob as Bn,
  P as ge,
  Pa as Ao,
  Pb as es,
  Q as B,
  Qa as An,
  Qb as ts,
  R as F,
  Ra as Pn,
  S as Ee,
  Sa as Ue,
  T as _,
  Ta as Be,
  U as w,
  Ua as ze,
  V as xo,
  Va as Ri,
  W as M,
  Wa as p,
  X as In,
  Xa as m,
  Y as h,
  Ya as R,
  Z as v,
  Za as Po,
  _ as kn,
  _a as Nn,
  a as g,
  aa as Et,
  ab as Fn,
  b as U,
  ba as me,
  bb as Ii,
  c as mo,
  ca as j,
  cb as At,
  d as Ne,
  da as C,
  db as Pt,
  e as vo,
  ea as ce,
  eb as f,
  f as wt,
  fa as tt,
  fb as Se,
  g as wn,
  ga as Oo,
  gb as Me,
  h as Cn,
  ha as Ot,
  hb as No,
  i as I,
  ia as ve,
  ib as ki,
  j as W,
  ja as it,
  jb as Fo,
  k as Ce,
  ka as Do,
  kb as Ti,
  l as X,
  la as So,
  lb as Ai,
  m as y,
  ma as Dt,
  mb as jn,
  n as Ct,
  na as St,
  nb as jo,
  o as xn,
  oa as Mt,
  ob as Ln,
  p as _o,
  pa as K,
  pb as Pi,
  q as T,
  qa as Tn,
  qb as Ve,
  r as Je,
  ra as H,
  rb as Lo,
  s as ee,
  sa as Q,
  sb as Ni,
  t as En,
  ta as Mo,
  tb as Uo,
  u as yi,
  ua as Rt,
  ub as $e,
  v as Fe,
  va as Ro,
  vb as Bo,
  w as bo,
  wa as Oe,
  wb as zo,
  x as wi,
  xa as De,
  xb as Vo,
  y as z,
  ya as It,
  yb as $o,
  z as On,
  za as xi,
  zb as Fi,
} from "./chunk-BASARSIV.js";
var Li = class i {
  constructor(e) {
    (this.normalizedNames = new Map()),
      (this.lazyUpdate = null),
      e
        ? typeof e == "string"
          ? (this.lazyInit = () => {
              (this.headers = new Map()),
                e
                  .split(
                    `
`
                  )
                  .forEach((r) => {
                    let t = r.indexOf(":");
                    if (t > 0) {
                      let n = r.slice(0, t),
                        o = n.toLowerCase(),
                        s = r.slice(t + 1).trim();
                      this.maybeSetNormalizedName(n, o),
                        this.headers.has(o)
                          ? this.headers.get(o).push(s)
                          : this.headers.set(o, [s]);
                    }
                  });
            })
          : typeof Headers < "u" && e instanceof Headers
          ? ((this.headers = new Map()),
            e.forEach((r, t) => {
              this.setHeaderEntries(t, r);
            }))
          : (this.lazyInit = () => {
              (this.headers = new Map()),
                Object.entries(e).forEach(([r, t]) => {
                  this.setHeaderEntries(r, t);
                });
            })
        : (this.headers = new Map());
  }
  has(e) {
    return this.init(), this.headers.has(e.toLowerCase());
  }
  get(e) {
    this.init();
    let r = this.headers.get(e.toLowerCase());
    return r && r.length > 0 ? r[0] : null;
  }
  keys() {
    return this.init(), Array.from(this.normalizedNames.values());
  }
  getAll(e) {
    return this.init(), this.headers.get(e.toLowerCase()) || null;
  }
  append(e, r) {
    return this.clone({ name: e, value: r, op: "a" });
  }
  set(e, r) {
    return this.clone({ name: e, value: r, op: "s" });
  }
  delete(e, r) {
    return this.clone({ name: e, value: r, op: "d" });
  }
  maybeSetNormalizedName(e, r) {
    this.normalizedNames.has(r) || this.normalizedNames.set(r, e);
  }
  init() {
    this.lazyInit &&
      (this.lazyInit instanceof i
        ? this.copyFrom(this.lazyInit)
        : this.lazyInit(),
      (this.lazyInit = null),
      this.lazyUpdate &&
        (this.lazyUpdate.forEach((e) => this.applyUpdate(e)),
        (this.lazyUpdate = null)));
  }
  copyFrom(e) {
    e.init(),
      Array.from(e.headers.keys()).forEach((r) => {
        this.headers.set(r, e.headers.get(r)),
          this.normalizedNames.set(r, e.normalizedNames.get(r));
      });
  }
  clone(e) {
    let r = new i();
    return (
      (r.lazyInit =
        this.lazyInit && this.lazyInit instanceof i ? this.lazyInit : this),
      (r.lazyUpdate = (this.lazyUpdate || []).concat([e])),
      r
    );
  }
  applyUpdate(e) {
    let r = e.name.toLowerCase();
    switch (e.op) {
      case "a":
      case "s":
        let t = e.value;
        if ((typeof t == "string" && (t = [t]), t.length === 0)) return;
        this.maybeSetNormalizedName(e.name, r);
        let n = (e.op === "a" ? this.headers.get(r) : void 0) || [];
        n.push(...t), this.headers.set(r, n);
        break;
      case "d":
        let o = e.value;
        if (!o) this.headers.delete(r), this.normalizedNames.delete(r);
        else {
          let s = this.headers.get(r);
          if (!s) return;
          (s = s.filter((a) => o.indexOf(a) === -1)),
            s.length === 0
              ? (this.headers.delete(r), this.normalizedNames.delete(r))
              : this.headers.set(r, s);
        }
        break;
    }
  }
  setHeaderEntries(e, r) {
    let t = (Array.isArray(r) ? r : [r]).map((o) => o.toString()),
      n = e.toLowerCase();
    this.headers.set(n, t), this.maybeSetNormalizedName(e, n);
  }
  forEach(e) {
    this.init(),
      Array.from(this.normalizedNames.keys()).forEach((r) =>
        e(this.normalizedNames.get(r), this.headers.get(r))
      );
  }
};
var cs = (function (i) {
    return (
      (i[(i.Sent = 0)] = "Sent"),
      (i[(i.UploadProgress = 1)] = "UploadProgress"),
      (i[(i.ResponseHeader = 2)] = "ResponseHeader"),
      (i[(i.DownloadProgress = 3)] = "DownloadProgress"),
      (i[(i.Response = 4)] = "Response"),
      (i[(i.User = 5)] = "User"),
      i
    );
  })(cs || {}),
  zn = class {
    constructor(e, r = ls.Ok, t = "OK") {
      (this.headers = e.headers || new Li()),
        (this.status = e.status !== void 0 ? e.status : r),
        (this.statusText = e.statusText || t),
        (this.url = e.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  };
var Ui = class i extends zn {
  constructor(e = {}) {
    super(e),
      (this.type = cs.Response),
      (this.body = e.body !== void 0 ? e.body : null);
  }
  clone(e = {}) {
    return new i({
      body: e.body !== void 0 ? e.body : this.body,
      headers: e.headers || this.headers,
      status: e.status !== void 0 ? e.status : this.status,
      statusText: e.statusText || this.statusText,
      url: e.url || this.url || void 0,
    });
  }
};
var ls = (function (i) {
  return (
    (i[(i.Continue = 100)] = "Continue"),
    (i[(i.SwitchingProtocols = 101)] = "SwitchingProtocols"),
    (i[(i.Processing = 102)] = "Processing"),
    (i[(i.EarlyHints = 103)] = "EarlyHints"),
    (i[(i.Ok = 200)] = "Ok"),
    (i[(i.Created = 201)] = "Created"),
    (i[(i.Accepted = 202)] = "Accepted"),
    (i[(i.NonAuthoritativeInformation = 203)] = "NonAuthoritativeInformation"),
    (i[(i.NoContent = 204)] = "NoContent"),
    (i[(i.ResetContent = 205)] = "ResetContent"),
    (i[(i.PartialContent = 206)] = "PartialContent"),
    (i[(i.MultiStatus = 207)] = "MultiStatus"),
    (i[(i.AlreadyReported = 208)] = "AlreadyReported"),
    (i[(i.ImUsed = 226)] = "ImUsed"),
    (i[(i.MultipleChoices = 300)] = "MultipleChoices"),
    (i[(i.MovedPermanently = 301)] = "MovedPermanently"),
    (i[(i.Found = 302)] = "Found"),
    (i[(i.SeeOther = 303)] = "SeeOther"),
    (i[(i.NotModified = 304)] = "NotModified"),
    (i[(i.UseProxy = 305)] = "UseProxy"),
    (i[(i.Unused = 306)] = "Unused"),
    (i[(i.TemporaryRedirect = 307)] = "TemporaryRedirect"),
    (i[(i.PermanentRedirect = 308)] = "PermanentRedirect"),
    (i[(i.BadRequest = 400)] = "BadRequest"),
    (i[(i.Unauthorized = 401)] = "Unauthorized"),
    (i[(i.PaymentRequired = 402)] = "PaymentRequired"),
    (i[(i.Forbidden = 403)] = "Forbidden"),
    (i[(i.NotFound = 404)] = "NotFound"),
    (i[(i.MethodNotAllowed = 405)] = "MethodNotAllowed"),
    (i[(i.NotAcceptable = 406)] = "NotAcceptable"),
    (i[(i.ProxyAuthenticationRequired = 407)] = "ProxyAuthenticationRequired"),
    (i[(i.RequestTimeout = 408)] = "RequestTimeout"),
    (i[(i.Conflict = 409)] = "Conflict"),
    (i[(i.Gone = 410)] = "Gone"),
    (i[(i.LengthRequired = 411)] = "LengthRequired"),
    (i[(i.PreconditionFailed = 412)] = "PreconditionFailed"),
    (i[(i.PayloadTooLarge = 413)] = "PayloadTooLarge"),
    (i[(i.UriTooLong = 414)] = "UriTooLong"),
    (i[(i.UnsupportedMediaType = 415)] = "UnsupportedMediaType"),
    (i[(i.RangeNotSatisfiable = 416)] = "RangeNotSatisfiable"),
    (i[(i.ExpectationFailed = 417)] = "ExpectationFailed"),
    (i[(i.ImATeapot = 418)] = "ImATeapot"),
    (i[(i.MisdirectedRequest = 421)] = "MisdirectedRequest"),
    (i[(i.UnprocessableEntity = 422)] = "UnprocessableEntity"),
    (i[(i.Locked = 423)] = "Locked"),
    (i[(i.FailedDependency = 424)] = "FailedDependency"),
    (i[(i.TooEarly = 425)] = "TooEarly"),
    (i[(i.UpgradeRequired = 426)] = "UpgradeRequired"),
    (i[(i.PreconditionRequired = 428)] = "PreconditionRequired"),
    (i[(i.TooManyRequests = 429)] = "TooManyRequests"),
    (i[(i.RequestHeaderFieldsTooLarge = 431)] = "RequestHeaderFieldsTooLarge"),
    (i[(i.UnavailableForLegalReasons = 451)] = "UnavailableForLegalReasons"),
    (i[(i.InternalServerError = 500)] = "InternalServerError"),
    (i[(i.NotImplemented = 501)] = "NotImplemented"),
    (i[(i.BadGateway = 502)] = "BadGateway"),
    (i[(i.ServiceUnavailable = 503)] = "ServiceUnavailable"),
    (i[(i.GatewayTimeout = 504)] = "GatewayTimeout"),
    (i[(i.HttpVersionNotSupported = 505)] = "HttpVersionNotSupported"),
    (i[(i.VariantAlsoNegotiates = 506)] = "VariantAlsoNegotiates"),
    (i[(i.InsufficientStorage = 507)] = "InsufficientStorage"),
    (i[(i.LoopDetected = 508)] = "LoopDetected"),
    (i[(i.NotExtended = 510)] = "NotExtended"),
    (i[(i.NetworkAuthenticationRequired = 511)] =
      "NetworkAuthenticationRequired"),
    i
  );
})(ls || {});
var dc = new M("");
var is = "b",
  ns = "h",
  rs = "s",
  os = "st",
  ss = "u",
  as = "rt",
  ji = new M(""),
  hc = ["GET", "HEAD"];
function uc(i, e) {
  let d = v(ji),
    { isCacheActive: r } = d,
    t = mo(d, ["isCacheActive"]),
    { transferCache: n, method: o } = i;
  if (
    !r ||
    (o === "POST" && !t.includePostRequests && !n) ||
    (o !== "POST" && !hc.includes(o)) ||
    i.headers.has("authorization") ||
    i.headers.has("proxy-authorization") ||
    n === !1 ||
    t.filter?.(i) === !1
  )
    return e(i);
  let s = v(xi),
    a = fc(i),
    c = s.get(a, null),
    l = t.includeHeaders;
  if ((typeof n == "object" && n.includeHeaders && (l = n.includeHeaders), c)) {
    let { [is]: u, [as]: b, [ns]: O, [rs]: P, [os]: N, [ss]: ae } = c,
      q = u;
    switch (b) {
      case "arraybuffer":
        q = new TextEncoder().encode(u).buffer;
        break;
      case "blob":
        q = new Blob([u]);
        break;
    }
    let Qe = new Li(O);
    return y(
      new Ui({ body: q, headers: Qe, status: P, statusText: N, url: ae })
    );
  }
  return e(i).pipe(
    B((u) => {
      u instanceof Ui &&
        s.set(a, {
          [is]: u.body,
          [ns]: pc(u.headers, l),
          [rs]: u.status,
          [os]: u.statusText,
          [ss]: u.url || "",
          [as]: i.responseType,
        });
    })
  );
}
function pc(i, e) {
  if (!e) return {};
  let r = {};
  for (let t of e) {
    let n = i.getAll(t);
    n !== null && (r[t] = n);
  }
  return r;
}
function fc(i) {
  let { params: e, method: r, responseType: t, url: n, body: o } = i,
    s = e
      .keys()
      .sort()
      .map((d) => `${d}=${e.getAll(d)}`)
      .join("&"),
    c = [r, t, n, typeof o == "string" ? o : "", s].join("|"),
    l = gc(c);
  return l;
}
function gc(i) {
  let e = 0;
  for (let r of i) e = (Math.imul(31, e) + r.charCodeAt(0)) << 0;
  return (e += 2147483648), e.toString();
}
function ds(i) {
  return [
    {
      provide: ji,
      useFactory: () => (
        Mi("NgHttpTransferCache"), g({ isCacheActive: !0 }, i)
      ),
    },
    { provide: dc, useValue: uc, multi: !0, deps: [xi, ji] },
    {
      provide: Pi,
      multi: !0,
      useFactory: () => {
        let e = v(Ve),
          r = v(ji);
        return () => {
          Lo(e).then(() => {
            r.isCacheActive = !1;
          });
        };
      },
    },
  ];
}
var Hn = class extends Wo {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  Wn = class i extends Hn {
    static makeCurrent() {
      Ho(new i());
    }
    onAndCancel(e, r, t) {
      return (
        e.addEventListener(r, t),
        () => {
          e.removeEventListener(r, t);
        }
      );
    }
    dispatchEvent(e, r) {
      e.dispatchEvent(r);
    }
    remove(e) {
      e.parentNode && e.parentNode.removeChild(e);
    }
    createElement(e, r) {
      return (r = r || this.getDefaultDocument()), r.createElement(e);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(e) {
      return e.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(e) {
      return e instanceof DocumentFragment;
    }
    getGlobalEventTarget(e, r) {
      return r === "window"
        ? window
        : r === "document"
        ? e
        : r === "body"
        ? e.body
        : null;
    }
    getBaseHref(e) {
      let r = vc();
      return r == null ? null : _c(r);
    }
    resetBaseElement() {
      Nt = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(e) {
      return qo(document.cookie, e);
    }
  },
  Nt = null;
function vc() {
  return (
    (Nt = Nt || document.querySelector("base")),
    Nt ? Nt.getAttribute("href") : null
  );
}
function _c(i) {
  return new URL(i, document.baseURI).pathname;
}
var Yn = class {
    addToWindow(e) {
      (Ee.getAngularTestability = (t, n = !0) => {
        let o = e.findTestabilityInTree(t, n);
        if (o == null) throw new F(5103, !1);
        return o;
      }),
        (Ee.getAllAngularTestabilities = () => e.getAllTestabilities()),
        (Ee.getAllAngularRootElements = () => e.getAllRootElements());
      let r = (t) => {
        let n = Ee.getAllAngularTestabilities(),
          o = n.length,
          s = function () {
            o--, o == 0 && t();
          };
        n.forEach((a) => {
          a.whenStable(s);
        });
      };
      Ee.frameworkStabilizers || (Ee.frameworkStabilizers = []),
        Ee.frameworkStabilizers.push(r);
    }
    findTestabilityInTree(e, r, t) {
      if (r == null) return null;
      let n = e.getTestability(r);
      return (
        n ??
        (t
          ? Fi().isShadowRoot(r)
            ? this.findTestabilityInTree(e, r.host, !0)
            : this.findTestabilityInTree(e, r.parentElement, !0)
          : null)
      );
    }
  },
  bc = (() => {
    let e = class e {
      build() {
        return new XMLHttpRequest();
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac }));
    let i = e;
    return i;
  })(),
  Gn = new M(""),
  fs = (() => {
    let e = class e {
      constructor(t, n) {
        (this._zone = n),
          (this._eventNameToPlugin = new Map()),
          t.forEach((o) => {
            o.manager = this;
          }),
          (this._plugins = t.slice().reverse());
      }
      addEventListener(t, n, o) {
        return this._findPluginFor(n).addEventListener(t, n, o);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(t) {
        let n = this._eventNameToPlugin.get(t);
        if (n) return n;
        if (((n = this._plugins.find((s) => s.supports(t))), !n))
          throw new F(5101, !1);
        return this._eventNameToPlugin.set(t, n), n;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(Gn), h(S));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac }));
    let i = e;
    return i;
  })(),
  Bi = class {
    constructor(e) {
      this._doc = e;
    }
  },
  Vn = "ng-app-id",
  gs = (() => {
    let e = class e {
      constructor(t, n, o, s = {}) {
        (this.doc = t),
          (this.appId = n),
          (this.nonce = o),
          (this.platformId = s),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = Bn(s)),
          this.resetHostNodes();
      }
      addStyles(t) {
        for (let n of t)
          this.changeUsageCount(n, 1) === 1 && this.onStyleAdded(n);
      }
      removeStyles(t) {
        for (let n of t)
          this.changeUsageCount(n, -1) <= 0 && this.onStyleRemoved(n);
      }
      ngOnDestroy() {
        let t = this.styleNodesInDOM;
        t && (t.forEach((n) => n.remove()), t.clear());
        for (let n of this.getAllStyles()) this.onStyleRemoved(n);
        this.resetHostNodes();
      }
      addHost(t) {
        this.hostNodes.add(t);
        for (let n of this.getAllStyles()) this.addStyleToHost(t, n);
      }
      removeHost(t) {
        this.hostNodes.delete(t);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(t) {
        for (let n of this.hostNodes) this.addStyleToHost(n, t);
      }
      onStyleRemoved(t) {
        let n = this.styleRef;
        n.get(t)?.elements?.forEach((o) => o.remove()), n.delete(t);
      }
      collectServerRenderedStyles() {
        let t = this.doc.head?.querySelectorAll(`style[${Vn}="${this.appId}"]`);
        if (t?.length) {
          let n = new Map();
          return (
            t.forEach((o) => {
              o.textContent != null && n.set(o.textContent, o);
            }),
            n
          );
        }
        return null;
      }
      changeUsageCount(t, n) {
        let o = this.styleRef;
        if (o.has(t)) {
          let s = o.get(t);
          return (s.usage += n), s.usage;
        }
        return o.set(t, { usage: n, elements: [] }), n;
      }
      getStyleElement(t, n) {
        let o = this.styleNodesInDOM,
          s = o?.get(n);
        if (s?.parentNode === t) return o.delete(n), s.removeAttribute(Vn), s;
        {
          let a = this.doc.createElement("style");
          return (
            this.nonce && a.setAttribute("nonce", this.nonce),
            (a.textContent = n),
            this.platformIsServer && a.setAttribute(Vn, this.appId),
            t.appendChild(a),
            a
          );
        }
      }
      addStyleToHost(t, n) {
        let o = this.getStyleElement(t, n),
          s = this.styleRef,
          a = s.get(n)?.elements;
        a ? a.push(o) : s.set(n, { elements: [o], usage: 1 });
      }
      resetHostNodes() {
        let t = this.hostNodes;
        t.clear(), t.add(this.doc.head);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(D), h(Rt), h(It, 8), h(Oe));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac }));
    let i = e;
    return i;
  })(),
  $n = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/MathML/",
  },
  Xn = /%COMP%/g,
  ms = "%COMP%",
  yc = `_nghost-${ms}`,
  wc = `_ngcontent-${ms}`,
  Cc = !0,
  xc = new M("", { providedIn: "root", factory: () => Cc });
function Ec(i) {
  return wc.replace(Xn, i);
}
function Oc(i) {
  return yc.replace(Xn, i);
}
function vs(i, e) {
  return e.map((r) => r.replace(Xn, i));
}
var zi = (() => {
    let e = class e {
      constructor(t, n, o, s, a, c, l, d = null) {
        (this.eventManager = t),
          (this.sharedStylesHost = n),
          (this.appId = o),
          (this.removeStylesOnCompDestroy = s),
          (this.doc = a),
          (this.platformId = c),
          (this.ngZone = l),
          (this.nonce = d),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = Bn(c)),
          (this.defaultRenderer = new Ft(t, a, l, this.platformIsServer));
      }
      createRenderer(t, n) {
        if (!t || !n) return this.defaultRenderer;
        this.platformIsServer &&
          n.encapsulation === Et.ShadowDom &&
          (n = U(g({}, n), { encapsulation: Et.Emulated }));
        let o = this.getOrCreateRenderer(t, n);
        return (
          o instanceof Vi
            ? o.applyToHost(t)
            : o instanceof jt && o.applyStyles(),
          o
        );
      }
      getOrCreateRenderer(t, n) {
        let o = this.rendererByCompId,
          s = o.get(n.id);
        if (!s) {
          let a = this.doc,
            c = this.ngZone,
            l = this.eventManager,
            d = this.sharedStylesHost,
            u = this.removeStylesOnCompDestroy,
            b = this.platformIsServer;
          switch (n.encapsulation) {
            case Et.Emulated:
              s = new Vi(l, d, n, this.appId, u, a, c, b);
              break;
            case Et.ShadowDom:
              return new Zn(l, d, t, n, a, c, this.nonce, b);
            default:
              s = new jt(l, d, n, u, a, c, b);
              break;
          }
          o.set(n.id, s);
        }
        return s;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(fs), h(gs), h(Rt), h(xc), h(D), h(Oe), h(S), h(It));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac }));
    let i = e;
    return i;
  })(),
  Ft = class {
    constructor(e, r, t, n) {
      (this.eventManager = e),
        (this.doc = r),
        (this.ngZone = t),
        (this.platformIsServer = n),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(e, r) {
      return r
        ? this.doc.createElementNS($n[r] || r, e)
        : this.doc.createElement(e);
    }
    createComment(e) {
      return this.doc.createComment(e);
    }
    createText(e) {
      return this.doc.createTextNode(e);
    }
    appendChild(e, r) {
      (hs(e) ? e.content : e).appendChild(r);
    }
    insertBefore(e, r, t) {
      e && (hs(e) ? e.content : e).insertBefore(r, t);
    }
    removeChild(e, r) {
      e && e.removeChild(r);
    }
    selectRootElement(e, r) {
      let t = typeof e == "string" ? this.doc.querySelector(e) : e;
      if (!t) throw new F(-5104, !1);
      return r || (t.textContent = ""), t;
    }
    parentNode(e) {
      return e.parentNode;
    }
    nextSibling(e) {
      return e.nextSibling;
    }
    setAttribute(e, r, t, n) {
      if (n) {
        r = n + ":" + r;
        let o = $n[n];
        o ? e.setAttributeNS(o, r, t) : e.setAttribute(r, t);
      } else e.setAttribute(r, t);
    }
    removeAttribute(e, r, t) {
      if (t) {
        let n = $n[t];
        n ? e.removeAttributeNS(n, r) : e.removeAttribute(`${t}:${r}`);
      } else e.removeAttribute(r);
    }
    addClass(e, r) {
      e.classList.add(r);
    }
    removeClass(e, r) {
      e.classList.remove(r);
    }
    setStyle(e, r, t, n) {
      n & (kt.DashCase | kt.Important)
        ? e.style.setProperty(r, t, n & kt.Important ? "important" : "")
        : (e.style[r] = t);
    }
    removeStyle(e, r, t) {
      t & kt.DashCase ? e.style.removeProperty(r) : (e.style[r] = "");
    }
    setProperty(e, r, t) {
      e != null && (e[r] = t);
    }
    setValue(e, r) {
      e.nodeValue = r;
    }
    listen(e, r, t) {
      if (
        typeof e == "string" &&
        ((e = Fi().getGlobalEventTarget(this.doc, e)), !e)
      )
        throw new Error(`Unsupported event target ${e} for event ${r}`);
      return this.eventManager.addEventListener(
        e,
        r,
        this.decoratePreventDefault(t)
      );
    }
    decoratePreventDefault(e) {
      return (r) => {
        if (r === "__ngUnwrap__") return e;
        (this.platformIsServer ? this.ngZone.runGuarded(() => e(r)) : e(r)) ===
          !1 && r.preventDefault();
      };
    }
  };
function hs(i) {
  return i.tagName === "TEMPLATE" && i.content !== void 0;
}
var Zn = class extends Ft {
    constructor(e, r, t, n, o, s, a, c) {
      super(e, o, s, c),
        (this.sharedStylesHost = r),
        (this.hostEl = t),
        (this.shadowRoot = t.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let l = vs(n.id, n.styles);
      for (let d of l) {
        let u = document.createElement("style");
        a && u.setAttribute("nonce", a),
          (u.textContent = d),
          this.shadowRoot.appendChild(u);
      }
    }
    nodeOrShadowRoot(e) {
      return e === this.hostEl ? this.shadowRoot : e;
    }
    appendChild(e, r) {
      return super.appendChild(this.nodeOrShadowRoot(e), r);
    }
    insertBefore(e, r, t) {
      return super.insertBefore(this.nodeOrShadowRoot(e), r, t);
    }
    removeChild(e, r) {
      return super.removeChild(this.nodeOrShadowRoot(e), r);
    }
    parentNode(e) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  jt = class extends Ft {
    constructor(e, r, t, n, o, s, a, c) {
      super(e, o, s, a),
        (this.sharedStylesHost = r),
        (this.removeStylesOnCompDestroy = n),
        (this.styles = c ? vs(c, t.styles) : t.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  Vi = class extends jt {
    constructor(e, r, t, n, o, s, a, c) {
      let l = n + "-" + t.id;
      super(e, r, t, o, s, a, c, l),
        (this.contentAttr = Ec(l)),
        (this.hostAttr = Oc(l));
    }
    applyToHost(e) {
      this.applyStyles(), this.setAttribute(e, this.hostAttr, "");
    }
    createElement(e, r) {
      let t = super.createElement(e, r);
      return super.setAttribute(t, this.contentAttr, ""), t;
    }
  },
  Dc = (() => {
    let e = class e extends Bi {
      constructor(t) {
        super(t);
      }
      supports(t) {
        return !0;
      }
      addEventListener(t, n, o) {
        return (
          t.addEventListener(n, o, !1), () => this.removeEventListener(t, n, o)
        );
      }
      removeEventListener(t, n, o) {
        return t.removeEventListener(n, o);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(D));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac }));
    let i = e;
    return i;
  })(),
  us = ["alt", "control", "meta", "shift"],
  Sc = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  Mc = {
    alt: (i) => i.altKey,
    control: (i) => i.ctrlKey,
    meta: (i) => i.metaKey,
    shift: (i) => i.shiftKey,
  },
  Rc = (() => {
    let e = class e extends Bi {
      constructor(t) {
        super(t);
      }
      supports(t) {
        return e.parseEventName(t) != null;
      }
      addEventListener(t, n, o) {
        let s = e.parseEventName(n),
          a = e.eventCallback(s.fullKey, o, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => Fi().onAndCancel(t, s.domEventName, a));
      }
      static parseEventName(t) {
        let n = t.toLowerCase().split("."),
          o = n.shift();
        if (n.length === 0 || !(o === "keydown" || o === "keyup")) return null;
        let s = e._normalizeKey(n.pop()),
          a = "",
          c = n.indexOf("code");
        if (
          (c > -1 && (n.splice(c, 1), (a = "code.")),
          us.forEach((d) => {
            let u = n.indexOf(d);
            u > -1 && (n.splice(u, 1), (a += d + "."));
          }),
          (a += s),
          n.length != 0 || s.length === 0)
        )
          return null;
        let l = {};
        return (l.domEventName = o), (l.fullKey = a), l;
      }
      static matchEventFullKeyCode(t, n) {
        let o = Sc[t.key] || t.key,
          s = "";
        return (
          n.indexOf("code.") > -1 && ((o = t.code), (s = "code.")),
          o == null || !o
            ? !1
            : ((o = o.toLowerCase()),
              o === " " ? (o = "space") : o === "." && (o = "dot"),
              us.forEach((a) => {
                if (a !== o) {
                  let c = Mc[a];
                  c(t) && (s += a + ".");
                }
              }),
              (s += o),
              s === n)
        );
      }
      static eventCallback(t, n, o) {
        return (s) => {
          e.matchEventFullKeyCode(s, t) && o.runGuarded(() => n(s));
        };
      }
      static _normalizeKey(t) {
        return t === "esc" ? "escape" : t;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(D));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac }));
    let i = e;
    return i;
  })();
function Ic() {
  Wn.makeCurrent();
}
function kc() {
  return new Tn();
}
function Tc() {
  return Mo(document), document;
}
var Ac = [
    { provide: Oe, useValue: Qo },
    { provide: Ro, useValue: Ic, multi: !0 },
    { provide: D, useFactory: Tc, deps: [] },
  ],
  _s = Uo(Bo, "browser", Ac),
  Pc = new M(""),
  Nc = [
    { provide: Ti, useClass: Yn, deps: [] },
    { provide: Fo, useClass: Ai, deps: [S, jn, Ti] },
    { provide: Ai, useClass: Ai, deps: [S, jn, Ti] },
  ],
  Fc = [
    { provide: Oo, useValue: "root" },
    { provide: Tn, useFactory: kc, deps: [] },
    { provide: Gn, useClass: Dc, multi: !0, deps: [D, S, Oe] },
    { provide: Gn, useClass: Rc, multi: !0, deps: [D] },
    zi,
    gs,
    fs,
    { provide: Si, useExisting: zi },
    { provide: ts, useClass: bc, deps: [] },
    [],
  ],
  bs = (() => {
    let e = class e {
      constructor(t) {}
      static withServerTransition(t) {
        return { ngModule: e, providers: [{ provide: Rt, useValue: t.appId }] };
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(Pc, 12));
    }),
      (e.ɵmod = C({ type: e })),
      (e.ɵinj = w({ providers: [...Fc, ...Nc], imports: [G, zo] }));
    let i = e;
    return i;
  })();
var ys = (() => {
  let e = class e {
    constructor(t) {
      this._doc = t;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(t) {
      this._doc.title = t || "";
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(D));
  }),
    (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let i = e;
  return i;
})();
var qn = (function (i) {
  return (
    (i[(i.NoHttpTransferCache = 0)] = "NoHttpTransferCache"),
    (i[(i.HttpTransferCacheOptions = 1)] = "HttpTransferCacheOptions"),
    i
  );
})(qn || {});
function ws(...i) {
  let e = [],
    r = new Set(),
    t = r.has(qn.HttpTransferCacheOptions);
  for (let { ɵproviders: n, ɵkind: o } of i) r.add(o), n.length && e.push(n);
  return tt([[], Vo(), r.has(qn.NoHttpTransferCache) || t ? [] : ds({}), e]);
}
var E = "primary",
  Jt = Symbol("RouteTitle"),
  tr = class {
    constructor(e) {
      this.params = e || {};
    }
    has(e) {
      return Object.prototype.hasOwnProperty.call(this.params, e);
    }
    get(e) {
      if (this.has(e)) {
        let r = this.params[e];
        return Array.isArray(r) ? r[0] : r;
      }
      return null;
    }
    getAll(e) {
      if (this.has(e)) {
        let r = this.params[e];
        return Array.isArray(r) ? r : [r];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function ct(i) {
  return new tr(i);
}
function jc(i, e, r) {
  let t = r.path.split("/");
  if (
    t.length > i.length ||
    (r.pathMatch === "full" && (e.hasChildren() || t.length < i.length))
  )
    return null;
  let n = {};
  for (let o = 0; o < t.length; o++) {
    let s = t[o],
      a = i[o];
    if (s.startsWith(":")) n[s.substring(1)] = a;
    else if (s !== a.path) return null;
  }
  return { consumed: i.slice(0, t.length), posParams: n };
}
function Lc(i, e) {
  if (i.length !== e.length) return !1;
  for (let r = 0; r < i.length; ++r) if (!he(i[r], e[r])) return !1;
  return !0;
}
function he(i, e) {
  let r = i ? ir(i) : void 0,
    t = e ? ir(e) : void 0;
  if (!r || !t || r.length != t.length) return !1;
  let n;
  for (let o = 0; o < r.length; o++)
    if (((n = r[o]), !ks(i[n], e[n]))) return !1;
  return !0;
}
function ir(i) {
  return [...Object.keys(i), ...Object.getOwnPropertySymbols(i)];
}
function ks(i, e) {
  if (Array.isArray(i) && Array.isArray(e)) {
    if (i.length !== e.length) return !1;
    let r = [...i].sort(),
      t = [...e].sort();
    return r.every((n, o) => t[o] === n);
  } else return i === e;
}
function Ts(i) {
  return i.length > 0 ? i[i.length - 1] : null;
}
function Te(i) {
  return xn(i) ? i : jo(i) ? X(Promise.resolve(i)) : y(i);
}
var Uc = { exact: Ps, subset: Ns },
  As = { exact: Bc, subset: zc, ignored: () => !0 };
function xs(i, e, r) {
  return (
    Uc[r.paths](i.root, e.root, r.matrixParams) &&
    As[r.queryParams](i.queryParams, e.queryParams) &&
    !(r.fragment === "exact" && i.fragment !== e.fragment)
  );
}
function Bc(i, e) {
  return he(i, e);
}
function Ps(i, e, r) {
  if (
    !We(i.segments, e.segments) ||
    !Wi(i.segments, e.segments, r) ||
    i.numberOfChildren !== e.numberOfChildren
  )
    return !1;
  for (let t in e.children)
    if (!i.children[t] || !Ps(i.children[t], e.children[t], r)) return !1;
  return !0;
}
function zc(i, e) {
  return (
    Object.keys(e).length <= Object.keys(i).length &&
    Object.keys(e).every((r) => ks(i[r], e[r]))
  );
}
function Ns(i, e, r) {
  return Fs(i, e, e.segments, r);
}
function Fs(i, e, r, t) {
  if (i.segments.length > r.length) {
    let n = i.segments.slice(0, r.length);
    return !(!We(n, r) || e.hasChildren() || !Wi(n, r, t));
  } else if (i.segments.length === r.length) {
    if (!We(i.segments, r) || !Wi(i.segments, r, t)) return !1;
    for (let n in e.children)
      if (!i.children[n] || !Ns(i.children[n], e.children[n], t)) return !1;
    return !0;
  } else {
    let n = r.slice(0, i.segments.length),
      o = r.slice(i.segments.length);
    return !We(i.segments, n) || !Wi(i.segments, n, t) || !i.children[E]
      ? !1
      : Fs(i.children[E], e, o, t);
  }
}
function Wi(i, e, r) {
  return e.every((t, n) => As[r](i[n].parameters, t.parameters));
}
var Re = class {
    constructor(e = new A([], {}), r = {}, t = null) {
      (this.root = e), (this.queryParams = r), (this.fragment = t);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= ct(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return Hc.serialize(this);
    }
  },
  A = class {
    constructor(e, r) {
      (this.segments = e),
        (this.children = r),
        (this.parent = null),
        Object.values(r).forEach((t) => (t.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return Yi(this);
    }
  },
  He = class {
    constructor(e, r) {
      (this.path = e), (this.parameters = r);
    }
    get parameterMap() {
      return (this._parameterMap ??= ct(this.parameters)), this._parameterMap;
    }
    toString() {
      return Ls(this);
    }
  };
function Vc(i, e) {
  return We(i, e) && i.every((r, t) => he(r.parameters, e[t].parameters));
}
function We(i, e) {
  return i.length !== e.length ? !1 : i.every((r, t) => r.path === e[t].path);
}
function $c(i, e) {
  let r = [];
  return (
    Object.entries(i.children).forEach(([t, n]) => {
      t === E && (r = r.concat(e(n, t)));
    }),
    Object.entries(i.children).forEach(([t, n]) => {
      t !== E && (r = r.concat(e(n, t)));
    }),
    r
  );
}
var ei = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = _({ token: e, factory: () => new Ht(), providedIn: "root" }));
    let i = e;
    return i;
  })(),
  Ht = class {
    parse(e) {
      let r = new rr(e);
      return new Re(
        r.parseRootSegment(),
        r.parseQueryParams(),
        r.parseFragment()
      );
    }
    serialize(e) {
      let r = `/${Lt(e.root, !0)}`,
        t = Gc(e.queryParams),
        n = typeof e.fragment == "string" ? `#${Wc(e.fragment)}` : "";
      return `${r}${t}${n}`;
    }
  },
  Hc = new Ht();
function Yi(i) {
  return i.segments.map((e) => Ls(e)).join("/");
}
function Lt(i, e) {
  if (!i.hasChildren()) return Yi(i);
  if (e) {
    let r = i.children[E] ? Lt(i.children[E], !1) : "",
      t = [];
    return (
      Object.entries(i.children).forEach(([n, o]) => {
        n !== E && t.push(`${n}:${Lt(o, !1)}`);
      }),
      t.length > 0 ? `${r}(${t.join("//")})` : r
    );
  } else {
    let r = $c(i, (t, n) =>
      n === E ? [Lt(i.children[E], !1)] : [`${n}:${Lt(t, !1)}`]
    );
    return Object.keys(i.children).length === 1 && i.children[E] != null
      ? `${Yi(i)}/${r[0]}`
      : `${Yi(i)}/(${r.join("//")})`;
  }
}
function js(i) {
  return encodeURIComponent(i)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function $i(i) {
  return js(i).replace(/%3B/gi, ";");
}
function Wc(i) {
  return encodeURI(i);
}
function nr(i) {
  return js(i)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function Gi(i) {
  return decodeURIComponent(i);
}
function Es(i) {
  return Gi(i.replace(/\+/g, "%20"));
}
function Ls(i) {
  return `${nr(i.path)}${Yc(i.parameters)}`;
}
function Yc(i) {
  return Object.entries(i)
    .map(([e, r]) => `;${nr(e)}=${nr(r)}`)
    .join("");
}
function Gc(i) {
  let e = Object.entries(i)
    .map(([r, t]) =>
      Array.isArray(t)
        ? t.map((n) => `${$i(r)}=${$i(n)}`).join("&")
        : `${$i(r)}=${$i(t)}`
    )
    .filter((r) => r);
  return e.length ? `?${e.join("&")}` : "";
}
var Zc = /^[^\/()?;#]+/;
function Kn(i) {
  let e = i.match(Zc);
  return e ? e[0] : "";
}
var qc = /^[^\/()?;=#]+/;
function Xc(i) {
  let e = i.match(qc);
  return e ? e[0] : "";
}
var Kc = /^[^=?&#]+/;
function Qc(i) {
  let e = i.match(Kc);
  return e ? e[0] : "";
}
var Jc = /^[^&#]+/;
function el(i) {
  let e = i.match(Jc);
  return e ? e[0] : "";
}
var rr = class {
  constructor(e) {
    (this.url = e), (this.remaining = e);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new A([], {})
        : new A([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let e = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(e);
      while (this.consumeOptional("&"));
    return e;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let e = [];
    for (
      this.peekStartsWith("(") || e.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), e.push(this.parseSegment());
    let r = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (r = this.parseParens(!0)));
    let t = {};
    return (
      this.peekStartsWith("(") && (t = this.parseParens(!1)),
      (e.length > 0 || Object.keys(r).length > 0) && (t[E] = new A(e, r)),
      t
    );
  }
  parseSegment() {
    let e = Kn(this.remaining);
    if (e === "" && this.peekStartsWith(";")) throw new F(4009, !1);
    return this.capture(e), new He(Gi(e), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let e = {};
    for (; this.consumeOptional(";"); ) this.parseParam(e);
    return e;
  }
  parseParam(e) {
    let r = Xc(this.remaining);
    if (!r) return;
    this.capture(r);
    let t = "";
    if (this.consumeOptional("=")) {
      let n = Kn(this.remaining);
      n && ((t = n), this.capture(t));
    }
    e[Gi(r)] = Gi(t);
  }
  parseQueryParam(e) {
    let r = Qc(this.remaining);
    if (!r) return;
    this.capture(r);
    let t = "";
    if (this.consumeOptional("=")) {
      let s = el(this.remaining);
      s && ((t = s), this.capture(t));
    }
    let n = Es(r),
      o = Es(t);
    if (e.hasOwnProperty(n)) {
      let s = e[n];
      Array.isArray(s) || ((s = [s]), (e[n] = s)), s.push(o);
    } else e[n] = o;
  }
  parseParens(e) {
    let r = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let t = Kn(this.remaining),
        n = this.remaining[t.length];
      if (n !== "/" && n !== ")" && n !== ";") throw new F(4010, !1);
      let o;
      t.indexOf(":") > -1
        ? ((o = t.slice(0, t.indexOf(":"))), this.capture(o), this.capture(":"))
        : e && (o = E);
      let s = this.parseChildren();
      (r[o] = Object.keys(s).length === 1 ? s[E] : new A([], s)),
        this.consumeOptional("//");
    }
    return r;
  }
  peekStartsWith(e) {
    return this.remaining.startsWith(e);
  }
  consumeOptional(e) {
    return this.peekStartsWith(e)
      ? ((this.remaining = this.remaining.substring(e.length)), !0)
      : !1;
  }
  capture(e) {
    if (!this.consumeOptional(e)) throw new F(4011, !1);
  }
};
function Us(i) {
  return i.segments.length > 0 ? new A([], { [E]: i }) : i;
}
function Bs(i) {
  let e = {};
  for (let [t, n] of Object.entries(i.children)) {
    let o = Bs(n);
    if (t === E && o.segments.length === 0 && o.hasChildren())
      for (let [s, a] of Object.entries(o.children)) e[s] = a;
    else (o.segments.length > 0 || o.hasChildren()) && (e[t] = o);
  }
  let r = new A(i.segments, e);
  return tl(r);
}
function tl(i) {
  if (i.numberOfChildren === 1 && i.children[E]) {
    let e = i.children[E];
    return new A(i.segments.concat(e.segments), e.children);
  }
  return i;
}
function lt(i) {
  return i instanceof Re;
}
function il(i, e, r = null, t = null) {
  let n = zs(i);
  return Vs(n, e, r, t);
}
function zs(i) {
  let e;
  function r(o) {
    let s = {};
    for (let c of o.children) {
      let l = r(c);
      s[c.outlet] = l;
    }
    let a = new A(o.url, s);
    return o === i && (e = a), a;
  }
  let t = r(i.root),
    n = Us(t);
  return e ?? n;
}
function Vs(i, e, r, t) {
  let n = i;
  for (; n.parent; ) n = n.parent;
  if (e.length === 0) return Qn(n, n, n, r, t);
  let o = nl(e);
  if (o.toRoot()) return Qn(n, n, new A([], {}), r, t);
  let s = rl(o, n, i),
    a = s.processChildren
      ? zt(s.segmentGroup, s.index, o.commands)
      : Hs(s.segmentGroup, s.index, o.commands);
  return Qn(n, s.segmentGroup, a, r, t);
}
function Zi(i) {
  return typeof i == "object" && i != null && !i.outlets && !i.segmentPath;
}
function Wt(i) {
  return typeof i == "object" && i != null && i.outlets;
}
function Qn(i, e, r, t, n) {
  let o = {};
  t &&
    Object.entries(t).forEach(([c, l]) => {
      o[c] = Array.isArray(l) ? l.map((d) => `${d}`) : `${l}`;
    });
  let s;
  i === e ? (s = r) : (s = $s(i, e, r));
  let a = Us(Bs(s));
  return new Re(a, o, n);
}
function $s(i, e, r) {
  let t = {};
  return (
    Object.entries(i.children).forEach(([n, o]) => {
      o === e ? (t[n] = r) : (t[n] = $s(o, e, r));
    }),
    new A(i.segments, t)
  );
}
var qi = class {
  constructor(e, r, t) {
    if (
      ((this.isAbsolute = e),
      (this.numberOfDoubleDots = r),
      (this.commands = t),
      e && t.length > 0 && Zi(t[0]))
    )
      throw new F(4003, !1);
    let n = t.find(Wt);
    if (n && n !== Ts(t)) throw new F(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function nl(i) {
  if (typeof i[0] == "string" && i.length === 1 && i[0] === "/")
    return new qi(!0, 0, i);
  let e = 0,
    r = !1,
    t = i.reduce((n, o, s) => {
      if (typeof o == "object" && o != null) {
        if (o.outlets) {
          let a = {};
          return (
            Object.entries(o.outlets).forEach(([c, l]) => {
              a[c] = typeof l == "string" ? l.split("/") : l;
            }),
            [...n, { outlets: a }]
          );
        }
        if (o.segmentPath) return [...n, o.segmentPath];
      }
      return typeof o != "string"
        ? [...n, o]
        : s === 0
        ? (o.split("/").forEach((a, c) => {
            (c == 0 && a === ".") ||
              (c == 0 && a === ""
                ? (r = !0)
                : a === ".."
                ? e++
                : a != "" && n.push(a));
          }),
          n)
        : [...n, o];
    }, []);
  return new qi(r, e, t);
}
var st = class {
  constructor(e, r, t) {
    (this.segmentGroup = e), (this.processChildren = r), (this.index = t);
  }
};
function rl(i, e, r) {
  if (i.isAbsolute) return new st(e, !0, 0);
  if (!r) return new st(e, !1, NaN);
  if (r.parent === null) return new st(r, !0, 0);
  let t = Zi(i.commands[0]) ? 0 : 1,
    n = r.segments.length - 1 + t;
  return ol(r, n, i.numberOfDoubleDots);
}
function ol(i, e, r) {
  let t = i,
    n = e,
    o = r;
  for (; o > n; ) {
    if (((o -= n), (t = t.parent), !t)) throw new F(4005, !1);
    n = t.segments.length;
  }
  return new st(t, !1, n - o);
}
function sl(i) {
  return Wt(i[0]) ? i[0].outlets : { [E]: i };
}
function Hs(i, e, r) {
  if (((i ??= new A([], {})), i.segments.length === 0 && i.hasChildren()))
    return zt(i, e, r);
  let t = al(i, e, r),
    n = r.slice(t.commandIndex);
  if (t.match && t.pathIndex < i.segments.length) {
    let o = new A(i.segments.slice(0, t.pathIndex), {});
    return (
      (o.children[E] = new A(i.segments.slice(t.pathIndex), i.children)),
      zt(o, 0, n)
    );
  } else
    return t.match && n.length === 0
      ? new A(i.segments, {})
      : t.match && !i.hasChildren()
      ? or(i, e, r)
      : t.match
      ? zt(i, 0, n)
      : or(i, e, r);
}
function zt(i, e, r) {
  if (r.length === 0) return new A(i.segments, {});
  {
    let t = sl(r),
      n = {};
    if (
      Object.keys(t).some((o) => o !== E) &&
      i.children[E] &&
      i.numberOfChildren === 1 &&
      i.children[E].segments.length === 0
    ) {
      let o = zt(i.children[E], e, r);
      return new A(i.segments, o.children);
    }
    return (
      Object.entries(t).forEach(([o, s]) => {
        typeof s == "string" && (s = [s]),
          s !== null && (n[o] = Hs(i.children[o], e, s));
      }),
      Object.entries(i.children).forEach(([o, s]) => {
        t[o] === void 0 && (n[o] = s);
      }),
      new A(i.segments, n)
    );
  }
}
function al(i, e, r) {
  let t = 0,
    n = e,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; n < i.segments.length; ) {
    if (t >= r.length) return o;
    let s = i.segments[n],
      a = r[t];
    if (Wt(a)) break;
    let c = `${a}`,
      l = t < r.length - 1 ? r[t + 1] : null;
    if (n > 0 && c === void 0) break;
    if (c && l && typeof l == "object" && l.outlets === void 0) {
      if (!Ds(c, l, s)) return o;
      t += 2;
    } else {
      if (!Ds(c, {}, s)) return o;
      t++;
    }
    n++;
  }
  return { match: !0, pathIndex: n, commandIndex: t };
}
function or(i, e, r) {
  let t = i.segments.slice(0, e),
    n = 0;
  for (; n < r.length; ) {
    let o = r[n];
    if (Wt(o)) {
      let c = cl(o.outlets);
      return new A(t, c);
    }
    if (n === 0 && Zi(r[0])) {
      let c = i.segments[e];
      t.push(new He(c.path, Os(r[0]))), n++;
      continue;
    }
    let s = Wt(o) ? o.outlets[E] : `${o}`,
      a = n < r.length - 1 ? r[n + 1] : null;
    s && a && Zi(a)
      ? (t.push(new He(s, Os(a))), (n += 2))
      : (t.push(new He(s, {})), n++);
  }
  return new A(t, {});
}
function cl(i) {
  let e = {};
  return (
    Object.entries(i).forEach(([r, t]) => {
      typeof t == "string" && (t = [t]),
        t !== null && (e[r] = or(new A([], {}), 0, t));
    }),
    e
  );
}
function Os(i) {
  let e = {};
  return Object.entries(i).forEach(([r, t]) => (e[r] = `${t}`)), e;
}
function Ds(i, e, r) {
  return i == r.path && he(e, r.parameters);
}
var Vt = "imperative",
  V = (function (i) {
    return (
      (i[(i.NavigationStart = 0)] = "NavigationStart"),
      (i[(i.NavigationEnd = 1)] = "NavigationEnd"),
      (i[(i.NavigationCancel = 2)] = "NavigationCancel"),
      (i[(i.NavigationError = 3)] = "NavigationError"),
      (i[(i.RoutesRecognized = 4)] = "RoutesRecognized"),
      (i[(i.ResolveStart = 5)] = "ResolveStart"),
      (i[(i.ResolveEnd = 6)] = "ResolveEnd"),
      (i[(i.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (i[(i.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (i[(i.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (i[(i.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (i[(i.ChildActivationStart = 11)] = "ChildActivationStart"),
      (i[(i.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (i[(i.ActivationStart = 13)] = "ActivationStart"),
      (i[(i.ActivationEnd = 14)] = "ActivationEnd"),
      (i[(i.Scroll = 15)] = "Scroll"),
      (i[(i.NavigationSkipped = 16)] = "NavigationSkipped"),
      i
    );
  })(V || {}),
  oe = class {
    constructor(e, r) {
      (this.id = e), (this.url = r);
    }
  },
  dt = class extends oe {
    constructor(e, r, t = "imperative", n = null) {
      super(e, r),
        (this.type = V.NavigationStart),
        (this.navigationTrigger = t),
        (this.restoredState = n);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  be = class extends oe {
    constructor(e, r, t) {
      super(e, r), (this.urlAfterRedirects = t), (this.type = V.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  re = (function (i) {
    return (
      (i[(i.Redirect = 0)] = "Redirect"),
      (i[(i.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (i[(i.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (i[(i.GuardRejected = 3)] = "GuardRejected"),
      i
    );
  })(re || {}),
  Xi = (function (i) {
    return (
      (i[(i.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (i[(i.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      i
    );
  })(Xi || {}),
  Ie = class extends oe {
    constructor(e, r, t, n) {
      super(e, r),
        (this.reason = t),
        (this.code = n),
        (this.type = V.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  ke = class extends oe {
    constructor(e, r, t, n) {
      super(e, r),
        (this.reason = t),
        (this.code = n),
        (this.type = V.NavigationSkipped);
    }
  },
  Yt = class extends oe {
    constructor(e, r, t, n) {
      super(e, r),
        (this.error = t),
        (this.target = n),
        (this.type = V.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  Ki = class extends oe {
    constructor(e, r, t, n) {
      super(e, r),
        (this.urlAfterRedirects = t),
        (this.state = n),
        (this.type = V.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  sr = class extends oe {
    constructor(e, r, t, n) {
      super(e, r),
        (this.urlAfterRedirects = t),
        (this.state = n),
        (this.type = V.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  ar = class extends oe {
    constructor(e, r, t, n, o) {
      super(e, r),
        (this.urlAfterRedirects = t),
        (this.state = n),
        (this.shouldActivate = o),
        (this.type = V.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  cr = class extends oe {
    constructor(e, r, t, n) {
      super(e, r),
        (this.urlAfterRedirects = t),
        (this.state = n),
        (this.type = V.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  lr = class extends oe {
    constructor(e, r, t, n) {
      super(e, r),
        (this.urlAfterRedirects = t),
        (this.state = n),
        (this.type = V.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  dr = class {
    constructor(e) {
      (this.route = e), (this.type = V.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  hr = class {
    constructor(e) {
      (this.route = e), (this.type = V.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  ur = class {
    constructor(e) {
      (this.snapshot = e), (this.type = V.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  pr = class {
    constructor(e) {
      (this.snapshot = e), (this.type = V.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  fr = class {
    constructor(e) {
      (this.snapshot = e), (this.type = V.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  gr = class {
    constructor(e) {
      (this.snapshot = e), (this.type = V.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Qi = class {
    constructor(e, r, t) {
      (this.routerEvent = e),
        (this.position = r),
        (this.anchor = t),
        (this.type = V.Scroll);
    }
    toString() {
      let e = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${e}')`;
    }
  },
  Gt = class {},
  Zt = class {
    constructor(e) {
      this.url = e;
    }
  };
var mr = class {
    constructor() {
      (this.outlet = null),
        (this.route = null),
        (this.injector = null),
        (this.children = new ti()),
        (this.attachRef = null);
    }
  },
  ti = (() => {
    let e = class e {
      constructor() {
        this.contexts = new Map();
      }
      onChildOutletCreated(t, n) {
        let o = this.getOrCreateContext(t);
        (o.outlet = n), this.contexts.set(t, o);
      }
      onChildOutletDestroyed(t) {
        let n = this.getContext(t);
        n && ((n.outlet = null), (n.attachRef = null));
      }
      onOutletDeactivated() {
        let t = this.contexts;
        return (this.contexts = new Map()), t;
      }
      onOutletReAttached(t) {
        this.contexts = t;
      }
      getOrCreateContext(t) {
        let n = this.getContext(t);
        return n || ((n = new mr()), this.contexts.set(t, n)), n;
      }
      getContext(t) {
        return this.contexts.get(t) || null;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })(),
  Ji = class {
    constructor(e) {
      this._root = e;
    }
    get root() {
      return this._root.value;
    }
    parent(e) {
      let r = this.pathFromRoot(e);
      return r.length > 1 ? r[r.length - 2] : null;
    }
    children(e) {
      let r = vr(e, this._root);
      return r ? r.children.map((t) => t.value) : [];
    }
    firstChild(e) {
      let r = vr(e, this._root);
      return r && r.children.length > 0 ? r.children[0].value : null;
    }
    siblings(e) {
      let r = _r(e, this._root);
      return r.length < 2
        ? []
        : r[r.length - 2].children.map((n) => n.value).filter((n) => n !== e);
    }
    pathFromRoot(e) {
      return _r(e, this._root).map((r) => r.value);
    }
  };
function vr(i, e) {
  if (i === e.value) return e;
  for (let r of e.children) {
    let t = vr(i, r);
    if (t) return t;
  }
  return null;
}
function _r(i, e) {
  if (i === e.value) return [e];
  for (let r of e.children) {
    let t = _r(i, r);
    if (t.length) return t.unshift(e), t;
  }
  return [];
}
var ne = class {
  constructor(e, r) {
    (this.value = e), (this.children = r);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function ot(i) {
  let e = {};
  return i && i.children.forEach((r) => (e[r.value.outlet] = r)), e;
}
var en = class extends Ji {
  constructor(e, r) {
    super(e), (this.snapshot = r), Rr(this, e);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function Ws(i) {
  let e = ll(i),
    r = new W([new He("", {})]),
    t = new W({}),
    n = new W({}),
    o = new W({}),
    s = new W(""),
    a = new ht(r, t, o, s, n, E, i, e.root);
  return (a.snapshot = e.root), new en(new ne(a, []), e);
}
function ll(i) {
  let e = {},
    r = {},
    t = {},
    n = "",
    o = new qt([], e, t, n, r, E, i, null, {});
  return new tn("", new ne(o, []));
}
var ht = class {
  constructor(e, r, t, n, o, s, a, c) {
    (this.urlSubject = e),
      (this.paramsSubject = r),
      (this.queryParamsSubject = t),
      (this.fragmentSubject = n),
      (this.dataSubject = o),
      (this.outlet = s),
      (this.component = a),
      (this._futureSnapshot = c),
      (this.title = this.dataSubject?.pipe(T((l) => l[Jt])) ?? y(void 0)),
      (this.url = e),
      (this.params = r),
      (this.queryParams = t),
      (this.fragment = n),
      (this.data = o);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(T((e) => ct(e)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(T((e) => ct(e)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function Mr(i, e, r = "emptyOnly") {
  let t,
    { routeConfig: n } = i;
  return (
    e !== null &&
    (r === "always" ||
      n?.path === "" ||
      (!e.component && !e.routeConfig?.loadComponent))
      ? (t = {
          params: g(g({}, e.params), i.params),
          data: g(g({}, e.data), i.data),
          resolve: g(g(g(g({}, i.data), e.data), n?.data), i._resolvedData),
        })
      : (t = {
          params: g({}, i.params),
          data: g({}, i.data),
          resolve: g(g({}, i.data), i._resolvedData ?? {}),
        }),
    n && Gs(n) && (t.resolve[Jt] = n.title),
    t
  );
}
var qt = class {
    get title() {
      return this.data?.[Jt];
    }
    constructor(e, r, t, n, o, s, a, c, l) {
      (this.url = e),
        (this.params = r),
        (this.queryParams = t),
        (this.fragment = n),
        (this.data = o),
        (this.outlet = s),
        (this.component = a),
        (this.routeConfig = c),
        (this._resolve = l);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= ct(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= ct(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let e = this.url.map((t) => t.toString()).join("/"),
        r = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${e}', path:'${r}')`;
    }
  },
  tn = class extends Ji {
    constructor(e, r) {
      super(r), (this.url = e), Rr(this, r);
    }
    toString() {
      return Ys(this._root);
    }
  };
function Rr(i, e) {
  (e.value._routerState = i), e.children.forEach((r) => Rr(i, r));
}
function Ys(i) {
  let e = i.children.length > 0 ? ` { ${i.children.map(Ys).join(", ")} } ` : "";
  return `${i.value}${e}`;
}
function Jn(i) {
  if (i.snapshot) {
    let e = i.snapshot,
      r = i._futureSnapshot;
    (i.snapshot = r),
      he(e.queryParams, r.queryParams) ||
        i.queryParamsSubject.next(r.queryParams),
      e.fragment !== r.fragment && i.fragmentSubject.next(r.fragment),
      he(e.params, r.params) || i.paramsSubject.next(r.params),
      Lc(e.url, r.url) || i.urlSubject.next(r.url),
      he(e.data, r.data) || i.dataSubject.next(r.data);
  } else
    (i.snapshot = i._futureSnapshot),
      i.dataSubject.next(i._futureSnapshot.data);
}
function br(i, e) {
  let r = he(i.params, e.params) && Vc(i.url, e.url),
    t = !i.parent != !e.parent;
  return r && !t && (!i.parent || br(i.parent, e.parent));
}
function Gs(i) {
  return typeof i.title == "string" || i.title === null;
}
var Ir = (() => {
    let e = class e {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = E),
          (this.activateEvents = new Q()),
          (this.deactivateEvents = new Q()),
          (this.attachEvents = new Q()),
          (this.detachEvents = new Q()),
          (this.parentContexts = v(ti)),
          (this.location = v(nt)),
          (this.changeDetector = v($e)),
          (this.environmentInjector = v(Ot)),
          (this.inputBinder = v(an, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(t) {
        if (t.name) {
          let { firstChange: n, previousValue: o } = t.name;
          if (n) return;
          this.isTrackedInParentContexts(o) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(o)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(t) {
        return this.parentContexts.getContext(t)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let t = this.parentContexts.getContext(this.name);
        t?.route &&
          (t.attachRef
            ? this.attach(t.attachRef, t.route)
            : this.activateWith(t.route, t.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new F(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new F(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new F(4012, !1);
        this.location.detach();
        let t = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(t.instance),
          t
        );
      }
      attach(t, n) {
        (this.activated = t),
          (this._activatedRoute = n),
          this.location.insert(t.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(t.instance);
      }
      deactivate() {
        if (this.activated) {
          let t = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(t);
        }
      }
      activateWith(t, n) {
        if (this.isActivated) throw new F(4013, !1);
        this._activatedRoute = t;
        let o = this.location,
          a = t.snapshot.component,
          c = this.parentContexts.getOrCreateContext(this.name).children,
          l = new yr(t, c, o.injector);
        (this.activated = o.createComponent(a, {
          index: o.length,
          injector: l,
          environmentInjector: n ?? this.environmentInjector,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵdir = ce({
        type: e,
        selectors: [["router-outlet"]],
        inputs: { name: "name" },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        standalone: !0,
        features: [it],
      }));
    let i = e;
    return i;
  })(),
  yr = class {
    constructor(e, r, t) {
      (this.route = e), (this.childContexts = r), (this.parent = t);
    }
    get(e, r) {
      return e === ht
        ? this.route
        : e === ti
        ? this.childContexts
        : this.parent.get(e, r);
    }
  },
  an = new M(""),
  Ss = (() => {
    let e = class e {
      constructor() {
        this.outletDataSubscriptions = new Map();
      }
      bindActivatedRouteToOutletComponent(t) {
        this.unsubscribeFromRouteData(t), this.subscribeToRouteData(t);
      }
      unsubscribeFromRouteData(t) {
        this.outletDataSubscriptions.get(t)?.unsubscribe(),
          this.outletDataSubscriptions.delete(t);
      }
      subscribeToRouteData(t) {
        let { activatedRoute: n } = t,
          o = Je([n.queryParams, n.params, n.data])
            .pipe(
              te(
                ([s, a, c], l) => (
                  (c = g(g(g({}, s), a), c)),
                  l === 0 ? y(c) : Promise.resolve(c)
                )
              )
            )
            .subscribe((s) => {
              if (
                !t.isActivated ||
                !t.activatedComponentRef ||
                t.activatedRoute !== n ||
                n.component === null
              ) {
                this.unsubscribeFromRouteData(t);
                return;
              }
              let a = $o(n.component);
              if (!a) {
                this.unsubscribeFromRouteData(t);
                return;
              }
              for (let { templateName: c } of a.inputs)
                t.activatedComponentRef.setInput(c, s[c]);
            });
        this.outletDataSubscriptions.set(t, o);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac }));
    let i = e;
    return i;
  })();
function dl(i, e, r) {
  let t = Xt(i, e._root, r ? r._root : void 0);
  return new en(t, e);
}
function Xt(i, e, r) {
  if (r && i.shouldReuseRoute(e.value, r.value.snapshot)) {
    let t = r.value;
    t._futureSnapshot = e.value;
    let n = hl(i, e, r);
    return new ne(t, n);
  } else {
    if (i.shouldAttach(e.value)) {
      let o = i.retrieve(e.value);
      if (o !== null) {
        let s = o.route;
        return (
          (s.value._futureSnapshot = e.value),
          (s.children = e.children.map((a) => Xt(i, a))),
          s
        );
      }
    }
    let t = ul(e.value),
      n = e.children.map((o) => Xt(i, o));
    return new ne(t, n);
  }
}
function hl(i, e, r) {
  return e.children.map((t) => {
    for (let n of r.children)
      if (i.shouldReuseRoute(t.value, n.value.snapshot)) return Xt(i, t, n);
    return Xt(i, t);
  });
}
function ul(i) {
  return new ht(
    new W(i.url),
    new W(i.params),
    new W(i.queryParams),
    new W(i.fragment),
    new W(i.data),
    i.outlet,
    i.component,
    i
  );
}
var Zs = "ngNavigationCancelingError";
function qs(i, e) {
  let { redirectTo: r, navigationBehaviorOptions: t } = lt(e)
      ? { redirectTo: e, navigationBehaviorOptions: void 0 }
      : e,
    n = Xs(!1, re.Redirect);
  return (n.url = r), (n.navigationBehaviorOptions = t), n;
}
function Xs(i, e) {
  let r = new Error(`NavigationCancelingError: ${i || ""}`);
  return (r[Zs] = !0), (r.cancellationCode = e), r;
}
function pl(i) {
  return Ks(i) && lt(i.url);
}
function Ks(i) {
  return !!i && i[Zs];
}
var fl = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵcmp = j({
      type: e,
      selectors: [["ng-component"]],
      standalone: !0,
      features: [Me],
      decls: 1,
      vars: 0,
      template: function (n, o) {
        n & 1 && R(0, "router-outlet");
      },
      dependencies: [Ir],
      encapsulation: 2,
    }));
  let i = e;
  return i;
})();
function gl(i, e) {
  return (
    i.providers &&
      !i._injector &&
      (i._injector = An(i.providers, e, `Route: ${i.path}`)),
    i._injector ?? e
  );
}
function kr(i) {
  let e = i.children && i.children.map(kr),
    r = e ? U(g({}, i), { children: e }) : g({}, i);
  return (
    !r.component &&
      !r.loadComponent &&
      (e || r.loadChildren) &&
      r.outlet &&
      r.outlet !== E &&
      (r.component = fl),
    r
  );
}
function ue(i) {
  return i.outlet || E;
}
function ml(i, e) {
  let r = i.filter((t) => ue(t) === e);
  return r.push(...i.filter((t) => ue(t) !== e)), r;
}
function ii(i) {
  if (!i) return null;
  if (i.routeConfig?._injector) return i.routeConfig._injector;
  for (let e = i.parent; e; e = e.parent) {
    let r = e.routeConfig;
    if (r?._loadedInjector) return r._loadedInjector;
    if (r?._injector) return r._injector;
  }
  return null;
}
var vl = (i, e, r, t) =>
    T(
      (n) => (
        new wr(e, n.targetRouterState, n.currentRouterState, r, t).activate(i),
        n
      )
    ),
  wr = class {
    constructor(e, r, t, n, o) {
      (this.routeReuseStrategy = e),
        (this.futureState = r),
        (this.currState = t),
        (this.forwardEvent = n),
        (this.inputBindingEnabled = o);
    }
    activate(e) {
      let r = this.futureState._root,
        t = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(r, t, e),
        Jn(this.futureState.root),
        this.activateChildRoutes(r, t, e);
    }
    deactivateChildRoutes(e, r, t) {
      let n = ot(r);
      e.children.forEach((o) => {
        let s = o.value.outlet;
        this.deactivateRoutes(o, n[s], t), delete n[s];
      }),
        Object.values(n).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, t);
        });
    }
    deactivateRoutes(e, r, t) {
      let n = e.value,
        o = r ? r.value : null;
      if (n === o)
        if (n.component) {
          let s = t.getContext(n.outlet);
          s && this.deactivateChildRoutes(e, r, s.children);
        } else this.deactivateChildRoutes(e, r, t);
      else o && this.deactivateRouteAndItsChildren(r, t);
    }
    deactivateRouteAndItsChildren(e, r) {
      e.value.component &&
      this.routeReuseStrategy.shouldDetach(e.value.snapshot)
        ? this.detachAndStoreRouteSubtree(e, r)
        : this.deactivateRouteAndOutlet(e, r);
    }
    detachAndStoreRouteSubtree(e, r) {
      let t = r.getContext(e.value.outlet),
        n = t && e.value.component ? t.children : r,
        o = ot(e);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, n);
      if (t && t.outlet) {
        let s = t.outlet.detach(),
          a = t.children.onOutletDeactivated();
        this.routeReuseStrategy.store(e.value.snapshot, {
          componentRef: s,
          route: e,
          contexts: a,
        });
      }
    }
    deactivateRouteAndOutlet(e, r) {
      let t = r.getContext(e.value.outlet),
        n = t && e.value.component ? t.children : r,
        o = ot(e);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, n);
      t &&
        (t.outlet && (t.outlet.deactivate(), t.children.onOutletDeactivated()),
        (t.attachRef = null),
        (t.route = null));
    }
    activateChildRoutes(e, r, t) {
      let n = ot(r);
      e.children.forEach((o) => {
        this.activateRoutes(o, n[o.value.outlet], t),
          this.forwardEvent(new gr(o.value.snapshot));
      }),
        e.children.length && this.forwardEvent(new pr(e.value.snapshot));
    }
    activateRoutes(e, r, t) {
      let n = e.value,
        o = r ? r.value : null;
      if ((Jn(n), n === o))
        if (n.component) {
          let s = t.getOrCreateContext(n.outlet);
          this.activateChildRoutes(e, r, s.children);
        } else this.activateChildRoutes(e, r, t);
      else if (n.component) {
        let s = t.getOrCreateContext(n.outlet);
        if (this.routeReuseStrategy.shouldAttach(n.snapshot)) {
          let a = this.routeReuseStrategy.retrieve(n.snapshot);
          this.routeReuseStrategy.store(n.snapshot, null),
            s.children.onOutletReAttached(a.contexts),
            (s.attachRef = a.componentRef),
            (s.route = a.route.value),
            s.outlet && s.outlet.attach(a.componentRef, a.route.value),
            Jn(a.route.value),
            this.activateChildRoutes(e, null, s.children);
        } else {
          let a = ii(n.snapshot);
          (s.attachRef = null),
            (s.route = n),
            (s.injector = a),
            s.outlet && s.outlet.activateWith(n, s.injector),
            this.activateChildRoutes(e, null, s.children);
        }
      } else this.activateChildRoutes(e, null, t);
    }
  },
  nn = class {
    constructor(e) {
      (this.path = e), (this.route = this.path[this.path.length - 1]);
    }
  },
  at = class {
    constructor(e, r) {
      (this.component = e), (this.route = r);
    }
  };
function _l(i, e, r) {
  let t = i._root,
    n = e ? e._root : null;
  return Ut(t, n, r, [t.value]);
}
function bl(i) {
  let e = i.routeConfig ? i.routeConfig.canActivateChild : null;
  return !e || e.length === 0 ? null : { node: i, guards: e };
}
function pt(i, e) {
  let r = Symbol(),
    t = e.get(i, r);
  return t === r ? (typeof i == "function" && !xo(i) ? i : e.get(i)) : t;
}
function Ut(
  i,
  e,
  r,
  t,
  n = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let o = ot(e);
  return (
    i.children.forEach((s) => {
      yl(s, o[s.value.outlet], r, t.concat([s.value]), n),
        delete o[s.value.outlet];
    }),
    Object.entries(o).forEach(([s, a]) => $t(a, r.getContext(s), n)),
    n
  );
}
function yl(
  i,
  e,
  r,
  t,
  n = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let o = i.value,
    s = e ? e.value : null,
    a = r ? r.getContext(i.value.outlet) : null;
  if (s && o.routeConfig === s.routeConfig) {
    let c = wl(s, o, o.routeConfig.runGuardsAndResolvers);
    c
      ? n.canActivateChecks.push(new nn(t))
      : ((o.data = s.data), (o._resolvedData = s._resolvedData)),
      o.component ? Ut(i, e, a ? a.children : null, t, n) : Ut(i, e, r, t, n),
      c &&
        a &&
        a.outlet &&
        a.outlet.isActivated &&
        n.canDeactivateChecks.push(new at(a.outlet.component, s));
  } else
    s && $t(e, a, n),
      n.canActivateChecks.push(new nn(t)),
      o.component
        ? Ut(i, null, a ? a.children : null, t, n)
        : Ut(i, null, r, t, n);
  return n;
}
function wl(i, e, r) {
  if (typeof r == "function") return r(i, e);
  switch (r) {
    case "pathParamsChange":
      return !We(i.url, e.url);
    case "pathParamsOrQueryParamsChange":
      return !We(i.url, e.url) || !he(i.queryParams, e.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !br(i, e) || !he(i.queryParams, e.queryParams);
    case "paramsChange":
    default:
      return !br(i, e);
  }
}
function $t(i, e, r) {
  let t = ot(i),
    n = i.value;
  Object.entries(t).forEach(([o, s]) => {
    n.component
      ? e
        ? $t(s, e.children.getContext(o), r)
        : $t(s, null, r)
      : $t(s, e, r);
  }),
    n.component
      ? e && e.outlet && e.outlet.isActivated
        ? r.canDeactivateChecks.push(new at(e.outlet.component, n))
        : r.canDeactivateChecks.push(new at(null, n))
      : r.canDeactivateChecks.push(new at(null, n));
}
function ni(i) {
  return typeof i == "function";
}
function Cl(i) {
  return typeof i == "boolean";
}
function xl(i) {
  return i && ni(i.canLoad);
}
function El(i) {
  return i && ni(i.canActivate);
}
function Ol(i) {
  return i && ni(i.canActivateChild);
}
function Dl(i) {
  return i && ni(i.canDeactivate);
}
function Sl(i) {
  return i && ni(i.canMatch);
}
function Qs(i) {
  return i instanceof _o || i?.name === "EmptyError";
}
var Hi = Symbol("INITIAL_VALUE");
function ut() {
  return te((i) =>
    Je(i.map((e) => e.pipe(Y(1), fe(Hi)))).pipe(
      T((e) => {
        for (let r of e)
          if (r !== !0) {
            if (r === Hi) return Hi;
            if (r === !1 || r instanceof Re) return r;
          }
        return !0;
      }),
      z((e) => e !== Hi),
      Y(1)
    )
  );
}
function Ml(i, e) {
  return ee((r) => {
    let {
      targetSnapshot: t,
      currentSnapshot: n,
      guards: { canActivateChecks: o, canDeactivateChecks: s },
    } = r;
    return s.length === 0 && o.length === 0
      ? y(U(g({}, r), { guardsResult: !0 }))
      : Rl(s, t, n, i).pipe(
          ee((a) => (a && Cl(a) ? Il(t, o, i, e) : y(a))),
          T((a) => U(g({}, r), { guardsResult: a }))
        );
  });
}
function Rl(i, e, r, t) {
  return X(i).pipe(
    ee((n) => Nl(n.component, n.route, r, e, t)),
    xe((n) => n !== !0, !0)
  );
}
function Il(i, e, r, t) {
  return X(e).pipe(
    je((n) =>
      yi(
        Tl(n.route.parent, t),
        kl(n.route, t),
        Pl(i, n.path, r),
        Al(i, n.route, r)
      )
    ),
    xe((n) => n !== !0, !0)
  );
}
function kl(i, e) {
  return i !== null && e && e(new fr(i)), y(!0);
}
function Tl(i, e) {
  return i !== null && e && e(new ur(i)), y(!0);
}
function Al(i, e, r) {
  let t = e.routeConfig ? e.routeConfig.canActivate : null;
  if (!t || t.length === 0) return y(!0);
  let n = t.map((o) =>
    Fe(() => {
      let s = ii(e) ?? r,
        a = pt(o, s),
        c = El(a) ? a.canActivate(e, i) : ve(s, () => a(e, i));
      return Te(c).pipe(xe());
    })
  );
  return y(n).pipe(ut());
}
function Pl(i, e, r) {
  let t = e[e.length - 1],
    o = e
      .slice(0, e.length - 1)
      .reverse()
      .map((s) => bl(s))
      .filter((s) => s !== null)
      .map((s) =>
        Fe(() => {
          let a = s.guards.map((c) => {
            let l = ii(s.node) ?? r,
              d = pt(c, l),
              u = Ol(d) ? d.canActivateChild(t, i) : ve(l, () => d(t, i));
            return Te(u).pipe(xe());
          });
          return y(a).pipe(ut());
        })
      );
  return y(o).pipe(ut());
}
function Nl(i, e, r, t, n) {
  let o = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return y(!0);
  let s = o.map((a) => {
    let c = ii(e) ?? n,
      l = pt(a, c),
      d = Dl(l) ? l.canDeactivate(i, e, r, t) : ve(c, () => l(i, e, r, t));
    return Te(d).pipe(xe());
  });
  return y(s).pipe(ut());
}
function Fl(i, e, r, t) {
  let n = e.canLoad;
  if (n === void 0 || n.length === 0) return y(!0);
  let o = n.map((s) => {
    let a = pt(s, i),
      c = xl(a) ? a.canLoad(e, r) : ve(i, () => a(e, r));
    return Te(c);
  });
  return y(o).pipe(ut(), Js(t));
}
function Js(i) {
  return vo(
    B((e) => {
      if (lt(e)) throw qs(i, e);
    }),
    T((e) => e === !0)
  );
}
function jl(i, e, r, t) {
  let n = e.canMatch;
  if (!n || n.length === 0) return y(!0);
  let o = n.map((s) => {
    let a = pt(s, i),
      c = Sl(a) ? a.canMatch(e, r) : ve(i, () => a(e, r));
    return Te(c);
  });
  return y(o).pipe(ut(), Js(t));
}
var Kt = class {
    constructor(e) {
      this.segmentGroup = e || null;
    }
  },
  rn = class extends Error {
    constructor(e) {
      super(), (this.urlTree = e);
    }
  };
function rt(i) {
  return Ct(new Kt(i));
}
function Ll(i) {
  return Ct(new F(4e3, !1));
}
function Ul(i) {
  return Ct(Xs(!1, re.GuardRejected));
}
var Cr = class {
    constructor(e, r) {
      (this.urlSerializer = e), (this.urlTree = r);
    }
    lineralizeSegments(e, r) {
      let t = [],
        n = r.root;
      for (;;) {
        if (((t = t.concat(n.segments)), n.numberOfChildren === 0)) return y(t);
        if (n.numberOfChildren > 1 || !n.children[E]) return Ll(e.redirectTo);
        n = n.children[E];
      }
    }
    applyRedirectCommands(e, r, t) {
      let n = this.applyRedirectCreateUrlTree(
        r,
        this.urlSerializer.parse(r),
        e,
        t
      );
      if (r.startsWith("/")) throw new rn(n);
      return n;
    }
    applyRedirectCreateUrlTree(e, r, t, n) {
      let o = this.createSegmentGroup(e, r.root, t, n);
      return new Re(
        o,
        this.createQueryParams(r.queryParams, this.urlTree.queryParams),
        r.fragment
      );
    }
    createQueryParams(e, r) {
      let t = {};
      return (
        Object.entries(e).forEach(([n, o]) => {
          if (typeof o == "string" && o.startsWith(":")) {
            let a = o.substring(1);
            t[n] = r[a];
          } else t[n] = o;
        }),
        t
      );
    }
    createSegmentGroup(e, r, t, n) {
      let o = this.createSegments(e, r.segments, t, n),
        s = {};
      return (
        Object.entries(r.children).forEach(([a, c]) => {
          s[a] = this.createSegmentGroup(e, c, t, n);
        }),
        new A(o, s)
      );
    }
    createSegments(e, r, t, n) {
      return r.map((o) =>
        o.path.startsWith(":")
          ? this.findPosParam(e, o, n)
          : this.findOrReturn(o, t)
      );
    }
    findPosParam(e, r, t) {
      let n = t[r.path.substring(1)];
      if (!n) throw new F(4001, !1);
      return n;
    }
    findOrReturn(e, r) {
      let t = 0;
      for (let n of r) {
        if (n.path === e.path) return r.splice(t), n;
        t++;
      }
      return e;
    }
  },
  xr = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function Bl(i, e, r, t, n) {
  let o = Tr(i, e, r);
  return o.matched
    ? ((t = gl(e, t)),
      jl(t, e, r, n).pipe(T((s) => (s === !0 ? o : g({}, xr)))))
    : y(o);
}
function Tr(i, e, r) {
  if (e.path === "**") return zl(r);
  if (e.path === "")
    return e.pathMatch === "full" && (i.hasChildren() || r.length > 0)
      ? g({}, xr)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: r,
          parameters: {},
          positionalParamSegments: {},
        };
  let n = (e.matcher || jc)(r, i, e);
  if (!n) return g({}, xr);
  let o = {};
  Object.entries(n.posParams ?? {}).forEach(([a, c]) => {
    o[a] = c.path;
  });
  let s =
    n.consumed.length > 0
      ? g(g({}, o), n.consumed[n.consumed.length - 1].parameters)
      : o;
  return {
    matched: !0,
    consumedSegments: n.consumed,
    remainingSegments: r.slice(n.consumed.length),
    parameters: s,
    positionalParamSegments: n.posParams ?? {},
  };
}
function zl(i) {
  return {
    matched: !0,
    parameters: i.length > 0 ? Ts(i).parameters : {},
    consumedSegments: i,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Ms(i, e, r, t) {
  return r.length > 0 && Hl(i, r, t)
    ? {
        segmentGroup: new A(e, $l(t, new A(r, i.children))),
        slicedSegments: [],
      }
    : r.length === 0 && Wl(i, r, t)
    ? {
        segmentGroup: new A(i.segments, Vl(i, r, t, i.children)),
        slicedSegments: r,
      }
    : { segmentGroup: new A(i.segments, i.children), slicedSegments: r };
}
function Vl(i, e, r, t) {
  let n = {};
  for (let o of r)
    if (cn(i, e, o) && !t[ue(o)]) {
      let s = new A([], {});
      n[ue(o)] = s;
    }
  return g(g({}, t), n);
}
function $l(i, e) {
  let r = {};
  r[E] = e;
  for (let t of i)
    if (t.path === "" && ue(t) !== E) {
      let n = new A([], {});
      r[ue(t)] = n;
    }
  return r;
}
function Hl(i, e, r) {
  return r.some((t) => cn(i, e, t) && ue(t) !== E);
}
function Wl(i, e, r) {
  return r.some((t) => cn(i, e, t));
}
function cn(i, e, r) {
  return (i.hasChildren() || e.length > 0) && r.pathMatch === "full"
    ? !1
    : r.path === "";
}
function Yl(i, e, r, t) {
  return ue(i) !== t && (t === E || !cn(e, r, i)) ? !1 : Tr(e, i, r).matched;
}
function Gl(i, e, r) {
  return e.length === 0 && !i.children[r];
}
var Er = class {};
function Zl(i, e, r, t, n, o, s = "emptyOnly") {
  return new Or(i, e, r, t, n, s, o).recognize();
}
var ql = 31,
  Or = class {
    constructor(e, r, t, n, o, s, a) {
      (this.injector = e),
        (this.configLoader = r),
        (this.rootComponentType = t),
        (this.config = n),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = s),
        (this.urlSerializer = a),
        (this.applyRedirects = new Cr(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(e) {
      return new F(4002, `'${e.segmentGroup}'`);
    }
    recognize() {
      let e = Ms(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(e).pipe(
        T((r) => {
          let t = new qt(
              [],
              Object.freeze({}),
              Object.freeze(g({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              E,
              this.rootComponentType,
              null,
              {}
            ),
            n = new ne(t, r),
            o = new tn("", n),
            s = il(t, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (s.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(s)),
            this.inheritParamsAndData(o._root, null),
            { state: o, tree: s }
          );
        })
      );
    }
    match(e) {
      return this.processSegmentGroup(this.injector, this.config, e, E).pipe(
        et((t) => {
          if (t instanceof rn)
            return (this.urlTree = t.urlTree), this.match(t.urlTree.root);
          throw t instanceof Kt ? this.noMatchError(t) : t;
        })
      );
    }
    inheritParamsAndData(e, r) {
      let t = e.value,
        n = Mr(t, r, this.paramsInheritanceStrategy);
      (t.params = Object.freeze(n.params)),
        (t.data = Object.freeze(n.data)),
        e.children.forEach((o) => this.inheritParamsAndData(o, t));
    }
    processSegmentGroup(e, r, t, n) {
      return t.segments.length === 0 && t.hasChildren()
        ? this.processChildren(e, r, t)
        : this.processSegment(e, r, t, t.segments, n, !0).pipe(
            T((o) => (o instanceof ne ? [o] : []))
          );
    }
    processChildren(e, r, t) {
      let n = [];
      for (let o of Object.keys(t.children))
        o === "primary" ? n.unshift(o) : n.push(o);
      return X(n).pipe(
        je((o) => {
          let s = t.children[o],
            a = ml(r, o);
          return this.processSegmentGroup(e, a, s, o);
        }),
        Co((o, s) => (o.push(...s), o)),
        Sn(null),
        wo(),
        ee((o) => {
          if (o === null) return rt(t);
          let s = ea(o);
          return Xl(s), y(s);
        })
      );
    }
    processSegment(e, r, t, n, o, s) {
      return X(r).pipe(
        je((a) =>
          this.processSegmentAgainstRoute(
            a._injector ?? e,
            r,
            a,
            t,
            n,
            o,
            s
          ).pipe(
            et((c) => {
              if (c instanceof Kt) return y(null);
              throw c;
            })
          )
        ),
        xe((a) => !!a),
        et((a) => {
          if (Qs(a)) return Gl(t, n, o) ? y(new Er()) : rt(t);
          throw a;
        })
      );
    }
    processSegmentAgainstRoute(e, r, t, n, o, s, a) {
      return Yl(t, n, o, s)
        ? t.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(e, n, t, o, s)
          : this.allowRedirects && a
          ? this.expandSegmentAgainstRouteUsingRedirect(e, n, r, t, o, s)
          : rt(n)
        : rt(n);
    }
    expandSegmentAgainstRouteUsingRedirect(e, r, t, n, o, s) {
      let {
        matched: a,
        consumedSegments: c,
        positionalParamSegments: l,
        remainingSegments: d,
      } = Tr(r, n, o);
      if (!a) return rt(r);
      n.redirectTo.startsWith("/") &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > ql && (this.allowRedirects = !1));
      let u = this.applyRedirects.applyRedirectCommands(c, n.redirectTo, l);
      return this.applyRedirects
        .lineralizeSegments(n, u)
        .pipe(ee((b) => this.processSegment(e, t, r, b.concat(d), s, !1)));
    }
    matchSegmentAgainstRoute(e, r, t, n, o) {
      let s = Bl(r, t, n, e, this.urlSerializer);
      return (
        t.path === "**" && (r.children = {}),
        s.pipe(
          te((a) =>
            a.matched
              ? ((e = t._injector ?? e),
                this.getChildConfig(e, t, n).pipe(
                  te(({ routes: c }) => {
                    let l = t._loadedInjector ?? e,
                      {
                        consumedSegments: d,
                        remainingSegments: u,
                        parameters: b,
                      } = a,
                      O = new qt(
                        d,
                        b,
                        Object.freeze(g({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        Ql(t),
                        ue(t),
                        t.component ?? t._loadedComponent ?? null,
                        t,
                        Jl(t)
                      ),
                      { segmentGroup: P, slicedSegments: N } = Ms(r, d, u, c);
                    if (N.length === 0 && P.hasChildren())
                      return this.processChildren(l, c, P).pipe(
                        T((q) => (q === null ? null : new ne(O, q)))
                      );
                    if (c.length === 0 && N.length === 0)
                      return y(new ne(O, []));
                    let ae = ue(t) === o;
                    return this.processSegment(l, c, P, N, ae ? E : o, !0).pipe(
                      T((q) => new ne(O, q instanceof ne ? [q] : []))
                    );
                  })
                ))
              : rt(r)
          )
        )
      );
    }
    getChildConfig(e, r, t) {
      return r.children
        ? y({ routes: r.children, injector: e })
        : r.loadChildren
        ? r._loadedRoutes !== void 0
          ? y({ routes: r._loadedRoutes, injector: r._loadedInjector })
          : Fl(e, r, t, this.urlSerializer).pipe(
              ee((n) =>
                n
                  ? this.configLoader.loadChildren(e, r).pipe(
                      B((o) => {
                        (r._loadedRoutes = o.routes),
                          (r._loadedInjector = o.injector);
                      })
                    )
                  : Ul(r)
              )
            )
        : y({ routes: [], injector: e });
    }
  };
function Xl(i) {
  i.sort((e, r) =>
    e.value.outlet === E
      ? -1
      : r.value.outlet === E
      ? 1
      : e.value.outlet.localeCompare(r.value.outlet)
  );
}
function Kl(i) {
  let e = i.value.routeConfig;
  return e && e.path === "";
}
function ea(i) {
  let e = [],
    r = new Set();
  for (let t of i) {
    if (!Kl(t)) {
      e.push(t);
      continue;
    }
    let n = e.find((o) => t.value.routeConfig === o.value.routeConfig);
    n !== void 0 ? (n.children.push(...t.children), r.add(n)) : e.push(t);
  }
  for (let t of r) {
    let n = ea(t.children);
    e.push(new ne(t.value, n));
  }
  return e.filter((t) => !r.has(t));
}
function Ql(i) {
  return i.data || {};
}
function Jl(i) {
  return i.resolve || {};
}
function ed(i, e, r, t, n, o) {
  return ee((s) =>
    Zl(i, e, r, t, s.extractedUrl, n, o).pipe(
      T(({ state: a, tree: c }) =>
        U(g({}, s), { targetSnapshot: a, urlAfterRedirects: c })
      )
    )
  );
}
function td(i, e) {
  return ee((r) => {
    let {
      targetSnapshot: t,
      guards: { canActivateChecks: n },
    } = r;
    if (!n.length) return y(r);
    let o = new Set(n.map((c) => c.route)),
      s = new Set();
    for (let c of o) if (!s.has(c)) for (let l of ta(c)) s.add(l);
    let a = 0;
    return X(s).pipe(
      je((c) =>
        o.has(c)
          ? id(c, t, i, e)
          : ((c.data = Mr(c, c.parent, i).resolve), y(void 0))
      ),
      B(() => a++),
      Rn(1),
      ee((c) => (a === s.size ? y(r) : Ce))
    );
  });
}
function ta(i) {
  let e = i.children.map((r) => ta(r)).flat();
  return [i, ...e];
}
function id(i, e, r, t) {
  let n = i.routeConfig,
    o = i._resolve;
  return (
    n?.title !== void 0 && !Gs(n) && (o[Jt] = n.title),
    nd(o, i, e, t).pipe(
      T(
        (s) => (
          (i._resolvedData = s), (i.data = Mr(i, i.parent, r).resolve), null
        )
      )
    )
  );
}
function nd(i, e, r, t) {
  let n = ir(i);
  if (n.length === 0) return y({});
  let o = {};
  return X(n).pipe(
    ee((s) =>
      rd(i[s], e, r, t).pipe(
        xe(),
        B((a) => {
          o[s] = a;
        })
      )
    ),
    Rn(1),
    yo(o),
    et((s) => (Qs(s) ? Ce : Ct(s)))
  );
}
function rd(i, e, r, t) {
  let n = ii(e) ?? t,
    o = pt(i, n),
    s = o.resolve ? o.resolve(e, r) : ve(n, () => o(e, r));
  return Te(s);
}
function er(i) {
  return te((e) => {
    let r = i(e);
    return r ? X(r).pipe(T(() => e)) : y(e);
  });
}
var ia = (() => {
    let e = class e {
      buildTitle(t) {
        let n,
          o = t.root;
        for (; o !== void 0; )
          (n = this.getResolvedTitleForRoute(o) ?? n),
            (o = o.children.find((s) => s.outlet === E));
        return n;
      }
      getResolvedTitleForRoute(t) {
        return t.data[Jt];
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = _({ token: e, factory: () => v(od), providedIn: "root" }));
    let i = e;
    return i;
  })(),
  od = (() => {
    let e = class e extends ia {
      constructor(t) {
        super(), (this.title = t);
      }
      updateTitle(t) {
        let n = this.buildTitle(t);
        n !== void 0 && this.title.setTitle(n);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(ys));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })(),
  ri = new M("", { providedIn: "root", factory: () => ({}) }),
  on = new M(""),
  Ar = (() => {
    let e = class e {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = v(Ni));
      }
      loadComponent(t) {
        if (this.componentLoaders.get(t)) return this.componentLoaders.get(t);
        if (t._loadedComponent) return y(t._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(t);
        let n = Te(t.loadComponent()).pipe(
            T(na),
            B((s) => {
              this.onLoadEndListener && this.onLoadEndListener(t),
                (t._loadedComponent = s);
            }),
            xt(() => {
              this.componentLoaders.delete(t);
            })
          ),
          o = new Cn(n, () => new I()).pipe(wn());
        return this.componentLoaders.set(t, o), o;
      }
      loadChildren(t, n) {
        if (this.childrenLoaders.get(n)) return this.childrenLoaders.get(n);
        if (n._loadedRoutes)
          return y({ routes: n._loadedRoutes, injector: n._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(n);
        let s = sd(n, this.compiler, t, this.onLoadEndListener).pipe(
            xt(() => {
              this.childrenLoaders.delete(n);
            })
          ),
          a = new Cn(s, () => new I()).pipe(wn());
        return this.childrenLoaders.set(n, a), a;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })();
function sd(i, e, r, t) {
  return Te(i.loadChildren()).pipe(
    T(na),
    ee((n) =>
      n instanceof Ao || Array.isArray(n) ? y(n) : X(e.compileModuleAsync(n))
    ),
    T((n) => {
      t && t(i);
      let o,
        s,
        a = !1;
      return (
        Array.isArray(n)
          ? ((s = n), (a = !0))
          : ((o = n.create(r).injector),
            (s = o.get(on, [], { optional: !0, self: !0 }).flat())),
        { routes: s.map(kr), injector: o }
      );
    })
  );
}
function ad(i) {
  return i && typeof i == "object" && "default" in i;
}
function na(i) {
  return ad(i) ? i.default : i;
}
var Pr = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = _({ token: e, factory: () => v(cd), providedIn: "root" }));
    let i = e;
    return i;
  })(),
  cd = (() => {
    let e = class e {
      shouldProcessUrl(t) {
        return !0;
      }
      extract(t) {
        return t;
      }
      merge(t, n) {
        return t;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })(),
  ra = new M(""),
  oa = new M("");
function ld(i, e, r) {
  let t = i.get(oa),
    n = i.get(D);
  return i.get(S).runOutsideAngular(() => {
    if (!n.startViewTransition || t.skipNextTransition)
      return (t.skipNextTransition = !1), Promise.resolve();
    let o,
      s = new Promise((l) => {
        o = l;
      }),
      a = n.startViewTransition(() => (o(), dd(i))),
      { onViewTransitionCreated: c } = t;
    return c && ve(i, () => c({ transition: a, from: e, to: r })), s;
  });
}
function dd(i) {
  return new Promise((e) => {
    To(e, { injector: i });
  });
}
var Nr = (() => {
  let e = class e {
    get hasRequestedNavigation() {
      return this.navigationId !== 0;
    }
    constructor() {
      (this.currentNavigation = null),
        (this.currentTransition = null),
        (this.lastSuccessfulNavigation = null),
        (this.events = new I()),
        (this.transitionAbortSubject = new I()),
        (this.configLoader = v(Ar)),
        (this.environmentInjector = v(Ot)),
        (this.urlSerializer = v(ei)),
        (this.rootContexts = v(ti)),
        (this.location = v(_e)),
        (this.inputBindingEnabled = v(an, { optional: !0 }) !== null),
        (this.titleStrategy = v(ia)),
        (this.options = v(ri, { optional: !0 }) || {}),
        (this.paramsInheritanceStrategy =
          this.options.paramsInheritanceStrategy || "emptyOnly"),
        (this.urlHandlingStrategy = v(Pr)),
        (this.createViewTransition = v(ra, { optional: !0 })),
        (this.navigationId = 0),
        (this.afterPreactivation = () => y(void 0)),
        (this.rootComponentType = null);
      let t = (o) => this.events.next(new dr(o)),
        n = (o) => this.events.next(new hr(o));
      (this.configLoader.onLoadEndListener = n),
        (this.configLoader.onLoadStartListener = t);
    }
    complete() {
      this.transitions?.complete();
    }
    handleNavigationRequest(t) {
      let n = ++this.navigationId;
      this.transitions?.next(U(g(g({}, this.transitions.value), t), { id: n }));
    }
    setupNavigations(t, n, o) {
      return (
        (this.transitions = new W({
          id: 0,
          currentUrlTree: n,
          currentRawUrl: n,
          extractedUrl: this.urlHandlingStrategy.extract(n),
          urlAfterRedirects: this.urlHandlingStrategy.extract(n),
          rawUrl: n,
          extras: {},
          resolve: null,
          reject: null,
          promise: Promise.resolve(!0),
          source: Vt,
          restoredState: null,
          currentSnapshot: o.snapshot,
          targetSnapshot: null,
          currentRouterState: o,
          targetRouterState: null,
          guards: { canActivateChecks: [], canDeactivateChecks: [] },
          guardsResult: null,
        })),
        this.transitions.pipe(
          z((s) => s.id !== 0),
          T((s) =>
            U(g({}, s), {
              extractedUrl: this.urlHandlingStrategy.extract(s.rawUrl),
            })
          ),
          te((s) => {
            let a = !1,
              c = !1;
            return y(s).pipe(
              te((l) => {
                if (this.navigationId > s.id)
                  return (
                    this.cancelNavigationTransition(
                      s,
                      "",
                      re.SupersededByNewNavigation
                    ),
                    Ce
                  );
                (this.currentTransition = s),
                  (this.currentNavigation = {
                    id: l.id,
                    initialUrl: l.rawUrl,
                    extractedUrl: l.extractedUrl,
                    trigger: l.source,
                    extras: l.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? U(g({}, this.lastSuccessfulNavigation), {
                          previousNavigation: null,
                        })
                      : null,
                  });
                let d =
                    !t.navigated ||
                    this.isUpdatingInternalState() ||
                    this.isUpdatedBrowserUrl(),
                  u = l.extras.onSameUrlNavigation ?? t.onSameUrlNavigation;
                if (!d && u !== "reload") {
                  let b = "";
                  return (
                    this.events.next(
                      new ke(
                        l.id,
                        this.urlSerializer.serialize(l.rawUrl),
                        b,
                        Xi.IgnoredSameUrlNavigation
                      )
                    ),
                    l.resolve(null),
                    Ce
                  );
                }
                if (this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))
                  return y(l).pipe(
                    te((b) => {
                      let O = this.transitions?.getValue();
                      return (
                        this.events.next(
                          new dt(
                            b.id,
                            this.urlSerializer.serialize(b.extractedUrl),
                            b.source,
                            b.restoredState
                          )
                        ),
                        O !== this.transitions?.getValue()
                          ? Ce
                          : Promise.resolve(b)
                      );
                    }),
                    ed(
                      this.environmentInjector,
                      this.configLoader,
                      this.rootComponentType,
                      t.config,
                      this.urlSerializer,
                      this.paramsInheritanceStrategy
                    ),
                    B((b) => {
                      (s.targetSnapshot = b.targetSnapshot),
                        (s.urlAfterRedirects = b.urlAfterRedirects),
                        (this.currentNavigation = U(
                          g({}, this.currentNavigation),
                          { finalUrl: b.urlAfterRedirects }
                        ));
                      let O = new Ki(
                        b.id,
                        this.urlSerializer.serialize(b.extractedUrl),
                        this.urlSerializer.serialize(b.urlAfterRedirects),
                        b.targetSnapshot
                      );
                      this.events.next(O);
                    })
                  );
                if (
                  d &&
                  this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)
                ) {
                  let {
                      id: b,
                      extractedUrl: O,
                      source: P,
                      restoredState: N,
                      extras: ae,
                    } = l,
                    q = new dt(b, this.urlSerializer.serialize(O), P, N);
                  this.events.next(q);
                  let Qe = Ws(this.rootComponentType).snapshot;
                  return (
                    (this.currentTransition = s =
                      U(g({}, l), {
                        targetSnapshot: Qe,
                        urlAfterRedirects: O,
                        extras: U(g({}, ae), {
                          skipLocationChange: !1,
                          replaceUrl: !1,
                        }),
                      })),
                    (this.currentNavigation.finalUrl = O),
                    y(s)
                  );
                } else {
                  let b = "";
                  return (
                    this.events.next(
                      new ke(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        b,
                        Xi.IgnoredByUrlHandlingStrategy
                      )
                    ),
                    l.resolve(null),
                    Ce
                  );
                }
              }),
              B((l) => {
                let d = new sr(
                  l.id,
                  this.urlSerializer.serialize(l.extractedUrl),
                  this.urlSerializer.serialize(l.urlAfterRedirects),
                  l.targetSnapshot
                );
                this.events.next(d);
              }),
              T(
                (l) => (
                  (this.currentTransition = s =
                    U(g({}, l), {
                      guards: _l(
                        l.targetSnapshot,
                        l.currentSnapshot,
                        this.rootContexts
                      ),
                    })),
                  s
                )
              ),
              Ml(this.environmentInjector, (l) => this.events.next(l)),
              B((l) => {
                if (((s.guardsResult = l.guardsResult), lt(l.guardsResult)))
                  throw qs(this.urlSerializer, l.guardsResult);
                let d = new ar(
                  l.id,
                  this.urlSerializer.serialize(l.extractedUrl),
                  this.urlSerializer.serialize(l.urlAfterRedirects),
                  l.targetSnapshot,
                  !!l.guardsResult
                );
                this.events.next(d);
              }),
              z((l) =>
                l.guardsResult
                  ? !0
                  : (this.cancelNavigationTransition(l, "", re.GuardRejected),
                    !1)
              ),
              er((l) => {
                if (l.guards.canActivateChecks.length)
                  return y(l).pipe(
                    B((d) => {
                      let u = new cr(
                        d.id,
                        this.urlSerializer.serialize(d.extractedUrl),
                        this.urlSerializer.serialize(d.urlAfterRedirects),
                        d.targetSnapshot
                      );
                      this.events.next(u);
                    }),
                    te((d) => {
                      let u = !1;
                      return y(d).pipe(
                        td(
                          this.paramsInheritanceStrategy,
                          this.environmentInjector
                        ),
                        B({
                          next: () => (u = !0),
                          complete: () => {
                            u ||
                              this.cancelNavigationTransition(
                                d,
                                "",
                                re.NoDataFromResolver
                              );
                          },
                        })
                      );
                    }),
                    B((d) => {
                      let u = new lr(
                        d.id,
                        this.urlSerializer.serialize(d.extractedUrl),
                        this.urlSerializer.serialize(d.urlAfterRedirects),
                        d.targetSnapshot
                      );
                      this.events.next(u);
                    })
                  );
              }),
              er((l) => {
                let d = (u) => {
                  let b = [];
                  u.routeConfig?.loadComponent &&
                    !u.routeConfig._loadedComponent &&
                    b.push(
                      this.configLoader.loadComponent(u.routeConfig).pipe(
                        B((O) => {
                          u.component = O;
                        }),
                        T(() => {})
                      )
                    );
                  for (let O of u.children) b.push(...d(O));
                  return b;
                };
                return Je(d(l.targetSnapshot.root)).pipe(Sn(null), Y(1));
              }),
              er(() => this.afterPreactivation()),
              te(() => {
                let { currentSnapshot: l, targetSnapshot: d } = s,
                  u = this.createViewTransition?.(
                    this.environmentInjector,
                    l.root,
                    d.root
                  );
                return u ? X(u).pipe(T(() => s)) : y(s);
              }),
              T((l) => {
                let d = dl(
                  t.routeReuseStrategy,
                  l.targetSnapshot,
                  l.currentRouterState
                );
                return (
                  (this.currentTransition = s =
                    U(g({}, l), { targetRouterState: d })),
                  (this.currentNavigation.targetRouterState = d),
                  s
                );
              }),
              B(() => {
                this.events.next(new Gt());
              }),
              vl(
                this.rootContexts,
                t.routeReuseStrategy,
                (l) => this.events.next(l),
                this.inputBindingEnabled
              ),
              Y(1),
              B({
                next: (l) => {
                  (a = !0),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    this.events.next(
                      new be(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        this.urlSerializer.serialize(l.urlAfterRedirects)
                      )
                    ),
                    this.titleStrategy?.updateTitle(
                      l.targetRouterState.snapshot
                    ),
                    l.resolve(!0);
                },
                complete: () => {
                  a = !0;
                },
              }),
              ge(
                this.transitionAbortSubject.pipe(
                  B((l) => {
                    throw l;
                  })
                )
              ),
              xt(() => {
                !a &&
                  !c &&
                  this.cancelNavigationTransition(
                    s,
                    "",
                    re.SupersededByNewNavigation
                  ),
                  this.currentTransition?.id === s.id &&
                    ((this.currentNavigation = null),
                    (this.currentTransition = null));
              }),
              et((l) => {
                if (((c = !0), Ks(l)))
                  this.events.next(
                    new Ie(
                      s.id,
                      this.urlSerializer.serialize(s.extractedUrl),
                      l.message,
                      l.cancellationCode
                    )
                  ),
                    pl(l) ? this.events.next(new Zt(l.url)) : s.resolve(!1);
                else {
                  this.events.next(
                    new Yt(
                      s.id,
                      this.urlSerializer.serialize(s.extractedUrl),
                      l,
                      s.targetSnapshot ?? void 0
                    )
                  );
                  try {
                    s.resolve(t.errorHandler(l));
                  } catch (d) {
                    this.options.resolveNavigationPromiseOnError
                      ? s.resolve(!1)
                      : s.reject(d);
                  }
                }
                return Ce;
              })
            );
          })
        )
      );
    }
    cancelNavigationTransition(t, n, o) {
      let s = new Ie(t.id, this.urlSerializer.serialize(t.extractedUrl), n, o);
      this.events.next(s), t.resolve(!1);
    }
    isUpdatingInternalState() {
      return (
        this.currentTransition?.extractedUrl.toString() !==
        this.currentTransition?.currentUrlTree.toString()
      );
    }
    isUpdatedBrowserUrl() {
      return (
        this.urlHandlingStrategy
          .extract(this.urlSerializer.parse(this.location.path(!0)))
          .toString() !== this.currentTransition?.extractedUrl.toString() &&
        !this.currentTransition?.extras.skipLocationChange
      );
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let i = e;
  return i;
})();
function hd(i) {
  return i !== Vt;
}
var ud = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = _({ token: e, factory: () => v(pd), providedIn: "root" }));
    let i = e;
    return i;
  })(),
  Dr = class {
    shouldDetach(e) {
      return !1;
    }
    store(e, r) {}
    shouldAttach(e) {
      return !1;
    }
    retrieve(e) {
      return null;
    }
    shouldReuseRoute(e, r) {
      return e.routeConfig === r.routeConfig;
    }
  },
  pd = (() => {
    let e = class e extends Dr {};
    (e.ɵfac = (() => {
      let t;
      return function (o) {
        return (t || (t = Mt(e)))(o || e);
      };
    })()),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })(),
  sa = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = _({ token: e, factory: () => v(fd), providedIn: "root" }));
    let i = e;
    return i;
  })(),
  fd = (() => {
    let e = class e extends sa {
      constructor() {
        super(...arguments),
          (this.location = v(_e)),
          (this.urlSerializer = v(ei)),
          (this.options = v(ri, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = v(Pr)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new Re()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = Ws(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(t) {
        return this.location.subscribe((n) => {
          n.type === "popstate" && t(n.url, n.state);
        });
      }
      handleRouterEvent(t, n) {
        if (t instanceof dt) this.stateMemento = this.createStateMemento();
        else if (t instanceof ke) this.rawUrlTree = n.initialUrl;
        else if (t instanceof Ki) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !n.extras.skipLocationChange
          ) {
            let o = this.urlHandlingStrategy.merge(n.finalUrl, n.initialUrl);
            this.setBrowserUrl(o, n);
          }
        } else
          t instanceof Gt
            ? ((this.currentUrlTree = n.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                n.finalUrl,
                n.initialUrl
              )),
              (this.routerState = n.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                (n.extras.skipLocationChange ||
                  this.setBrowserUrl(this.rawUrlTree, n)))
            : t instanceof Ie &&
              (t.code === re.GuardRejected || t.code === re.NoDataFromResolver)
            ? this.restoreHistory(n)
            : t instanceof Yt
            ? this.restoreHistory(n, !0)
            : t instanceof be &&
              ((this.lastSuccessfulId = t.id),
              (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(t, n) {
        let o = this.urlSerializer.serialize(t);
        if (this.location.isCurrentPathEqualTo(o) || n.extras.replaceUrl) {
          let s = this.browserPageId,
            a = g(g({}, n.extras.state), this.generateNgRouterState(n.id, s));
          this.location.replaceState(o, "", a);
        } else {
          let s = g(
            g({}, n.extras.state),
            this.generateNgRouterState(n.id, this.browserPageId + 1)
          );
          this.location.go(o, "", s);
        }
      }
      restoreHistory(t, n = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let o = this.browserPageId,
            s = this.currentPageId - o;
          s !== 0
            ? this.location.historyGo(s)
            : this.currentUrlTree === t.finalUrl &&
              s === 0 &&
              (this.resetState(t), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (n && this.resetState(t), this.resetUrlToCurrentUrlTree());
      }
      resetState(t) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            t.finalUrl ?? this.rawUrlTree
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
        );
      }
      generateNgRouterState(t, n) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: t, ɵrouterPageId: n }
          : { navigationId: t };
      }
    };
    (e.ɵfac = (() => {
      let t;
      return function (o) {
        return (t || (t = Mt(e)))(o || e);
      };
    })()),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })(),
  Bt = (function (i) {
    return (
      (i[(i.COMPLETE = 0)] = "COMPLETE"),
      (i[(i.FAILED = 1)] = "FAILED"),
      (i[(i.REDIRECTING = 2)] = "REDIRECTING"),
      i
    );
  })(Bt || {});
function aa(i, e) {
  i.events
    .pipe(
      z(
        (r) =>
          r instanceof be ||
          r instanceof Ie ||
          r instanceof Yt ||
          r instanceof ke
      ),
      T((r) =>
        r instanceof be || r instanceof ke
          ? Bt.COMPLETE
          : (
              r instanceof Ie
                ? r.code === re.Redirect ||
                  r.code === re.SupersededByNewNavigation
                : !1
            )
          ? Bt.REDIRECTING
          : Bt.FAILED
      ),
      z((r) => r !== Bt.REDIRECTING),
      Y(1)
    )
    .subscribe(() => {
      e();
    });
}
function gd(i) {
  throw i;
}
var md = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  vd = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  Z = (() => {
    let e = class e {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.isNgZoneEnabled = !1),
          (this.console = v(ki)),
          (this.stateManager = v(sa)),
          (this.options = v(ri, { optional: !0 }) || {}),
          (this.pendingTasks = v(Pn)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = v(Nr)),
          (this.urlSerializer = v(ei)),
          (this.location = v(_e)),
          (this.urlHandlingStrategy = v(Pr)),
          (this._events = new I()),
          (this.errorHandler = this.options.errorHandler || gd),
          (this.navigated = !1),
          (this.routeReuseStrategy = v(ud)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = v(on, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!v(an, { optional: !0 })),
          (this.eventsSubscription = new Ne()),
          (this.isNgZoneEnabled = v(S) instanceof S && S.isInAngularZone()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (t) => {
                this.console.warn(t);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let t = this.navigationTransitions.events.subscribe((n) => {
          try {
            let o = this.navigationTransitions.currentTransition,
              s = this.navigationTransitions.currentNavigation;
            if (o !== null && s !== null) {
              if (
                (this.stateManager.handleRouterEvent(n, s),
                n instanceof Ie &&
                  n.code !== re.Redirect &&
                  n.code !== re.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (n instanceof be) this.navigated = !0;
              else if (n instanceof Zt) {
                let a = this.urlHandlingStrategy.merge(n.url, o.currentRawUrl),
                  c = {
                    info: o.extras.info,
                    skipLocationChange: o.extras.skipLocationChange,
                    replaceUrl:
                      this.urlUpdateStrategy === "eager" || hd(o.source),
                  };
                this.scheduleNavigation(a, Vt, null, c, {
                  resolve: o.resolve,
                  reject: o.reject,
                  promise: o.promise,
                });
              }
            }
            bd(n) && this._events.next(n);
          } catch (o) {
            this.navigationTransitions.transitionAbortSubject.next(o);
          }
        });
        this.eventsSubscription.add(t);
      }
      resetRootComponentType(t) {
        (this.routerState.root.component = t),
          (this.navigationTransitions.rootComponentType = t);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              Vt,
              this.stateManager.restoredState()
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (t, n) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(t, "popstate", n);
              }, 0);
            }
          );
      }
      navigateToSyncWithBrowser(t, n, o) {
        let s = { replaceUrl: !0 },
          a = o?.navigationId ? o : null;
        if (o) {
          let l = g({}, o);
          delete l.navigationId,
            delete l.ɵrouterPageId,
            Object.keys(l).length !== 0 && (s.state = l);
        }
        let c = this.parseUrl(t);
        this.scheduleNavigation(c, n, a, s);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(t) {
        (this.config = t.map(kr)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(t, n = {}) {
        let {
            relativeTo: o,
            queryParams: s,
            fragment: a,
            queryParamsHandling: c,
            preserveFragment: l,
          } = n,
          d = l ? this.currentUrlTree.fragment : a,
          u = null;
        switch (c) {
          case "merge":
            u = g(g({}, this.currentUrlTree.queryParams), s);
            break;
          case "preserve":
            u = this.currentUrlTree.queryParams;
            break;
          default:
            u = s || null;
        }
        u !== null && (u = this.removeEmptyProps(u));
        let b;
        try {
          let O = o ? o.snapshot : this.routerState.snapshot.root;
          b = zs(O);
        } catch {
          (typeof t[0] != "string" || !t[0].startsWith("/")) && (t = []),
            (b = this.currentUrlTree.root);
        }
        return Vs(b, t, u, d ?? null);
      }
      navigateByUrl(t, n = { skipLocationChange: !1 }) {
        let o = lt(t) ? t : this.parseUrl(t),
          s = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
        return this.scheduleNavigation(s, Vt, null, n);
      }
      navigate(t, n = { skipLocationChange: !1 }) {
        return _d(t), this.navigateByUrl(this.createUrlTree(t, n), n);
      }
      serializeUrl(t) {
        return this.urlSerializer.serialize(t);
      }
      parseUrl(t) {
        try {
          return this.urlSerializer.parse(t);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(t, n) {
        let o;
        if (
          (n === !0 ? (o = g({}, md)) : n === !1 ? (o = g({}, vd)) : (o = n),
          lt(t))
        )
          return xs(this.currentUrlTree, t, o);
        let s = this.parseUrl(t);
        return xs(this.currentUrlTree, s, o);
      }
      removeEmptyProps(t) {
        return Object.entries(t).reduce(
          (n, [o, s]) => (s != null && (n[o] = s), n),
          {}
        );
      }
      scheduleNavigation(t, n, o, s, a) {
        if (this.disposed) return Promise.resolve(!1);
        let c, l, d;
        a
          ? ((c = a.resolve), (l = a.reject), (d = a.promise))
          : (d = new Promise((b, O) => {
              (c = b), (l = O);
            }));
        let u = this.pendingTasks.add();
        return (
          aa(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(u));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: n,
            restoredState: o,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: t,
            extras: s,
            resolve: c,
            reject: l,
            promise: d,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          d.catch((b) => Promise.reject(b))
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })();
function _d(i) {
  for (let e = 0; e < i.length; e++) if (i[e] == null) throw new F(4008, !1);
}
function bd(i) {
  return !(i instanceof Gt) && !(i instanceof Zt);
}
var sn = class {};
var yd = (() => {
    let e = class e {
      constructor(t, n, o, s, a) {
        (this.router = t),
          (this.injector = o),
          (this.preloadingStrategy = s),
          (this.loader = a);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            z((t) => t instanceof be),
            je(() => this.preload())
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(t, n) {
        let o = [];
        for (let s of n) {
          s.providers &&
            !s._injector &&
            (s._injector = An(s.providers, t, `Route: ${s.path}`));
          let a = s._injector ?? t,
            c = s._loadedInjector ?? a;
          ((s.loadChildren && !s._loadedRoutes && s.canLoad === void 0) ||
            (s.loadComponent && !s._loadedComponent)) &&
            o.push(this.preloadConfig(a, s)),
            (s.children || s._loadedRoutes) &&
              o.push(this.processRoutes(c, s.children ?? s._loadedRoutes));
        }
        return X(o).pipe(En());
      }
      preloadConfig(t, n) {
        return this.preloadingStrategy.preload(n, () => {
          let o;
          n.loadChildren && n.canLoad === void 0
            ? (o = this.loader.loadChildren(t, n))
            : (o = y(null));
          let s = o.pipe(
            ee((a) =>
              a === null
                ? y(void 0)
                : ((n._loadedRoutes = a.routes),
                  (n._loadedInjector = a.injector),
                  this.processRoutes(a.injector ?? t, a.routes))
            )
          );
          if (n.loadComponent && !n._loadedComponent) {
            let a = this.loader.loadComponent(n);
            return X([s, a]).pipe(En());
          } else return s;
        });
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(Z), h(Ni), h(Ot), h(sn), h(Ar));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })(),
  ca = new M(""),
  wd = (() => {
    let e = class e {
      constructor(t, n, o, s, a = {}) {
        (this.urlSerializer = t),
          (this.transitions = n),
          (this.viewportScroller = o),
          (this.zone = s),
          (this.options = a),
          (this.lastId = 0),
          (this.lastSource = "imperative"),
          (this.restoredId = 0),
          (this.store = {}),
          (a.scrollPositionRestoration ||= "disabled"),
          (a.anchorScrolling ||= "disabled");
      }
      init() {
        this.options.scrollPositionRestoration !== "disabled" &&
          this.viewportScroller.setHistoryScrollRestoration("manual"),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((t) => {
          t instanceof dt
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = t.navigationTrigger),
              (this.restoredId = t.restoredState
                ? t.restoredState.navigationId
                : 0))
            : t instanceof be
            ? ((this.lastId = t.id),
              this.scheduleScrollEvent(
                t,
                this.urlSerializer.parse(t.urlAfterRedirects).fragment
              ))
            : t instanceof ke &&
              t.code === Xi.IgnoredSameUrlNavigation &&
              ((this.lastSource = void 0),
              (this.restoredId = 0),
              this.scheduleScrollEvent(
                t,
                this.urlSerializer.parse(t.url).fragment
              ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((t) => {
          t instanceof Qi &&
            (t.position
              ? this.options.scrollPositionRestoration === "top"
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === "enabled" &&
                  this.viewportScroller.scrollToPosition(t.position)
              : t.anchor && this.options.anchorScrolling === "enabled"
              ? this.viewportScroller.scrollToAnchor(t.anchor)
              : this.options.scrollPositionRestoration !== "disabled" &&
                this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(t, n) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new Qi(
                  t,
                  this.lastSource === "popstate"
                    ? this.store[this.restoredId]
                    : null,
                  n
                )
              );
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
    };
    (e.ɵfac = function (n) {
      Oi();
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac }));
    let i = e;
    return i;
  })();
function Cd(i) {
  return i.routerState.root;
}
function oi(i, e) {
  return { ɵkind: i, ɵproviders: e };
}
function xd() {
  let i = v(K);
  return (e) => {
    let r = i.get(Ve);
    if (e !== r.components[0]) return;
    let t = i.get(Z),
      n = i.get(la);
    i.get(Fr) === 1 && t.initialNavigation(),
      i.get(da, null, In.Optional)?.setUpPreloading(),
      i.get(ca, null, In.Optional)?.init(),
      t.resetRootComponentType(r.componentTypes[0]),
      n.closed || (n.next(), n.complete(), n.unsubscribe());
  };
}
var la = new M("", { factory: () => new I() }),
  Fr = new M("", { providedIn: "root", factory: () => 1 });
function Ed() {
  return oi(2, [
    { provide: Fr, useValue: 0 },
    {
      provide: Ln,
      multi: !0,
      deps: [K],
      useFactory: (e) => {
        let r = e.get(Yo, Promise.resolve());
        return () =>
          r.then(
            () =>
              new Promise((t) => {
                let n = e.get(Z),
                  o = e.get(la);
                aa(n, () => {
                  t(!0);
                }),
                  (e.get(Nr).afterPreactivation = () => (
                    t(!0), o.closed ? y(void 0) : o
                  )),
                  n.initialNavigation();
              })
          );
      },
    },
  ]);
}
function Od() {
  return oi(3, [
    {
      provide: Ln,
      multi: !0,
      useFactory: () => {
        let e = v(Z);
        return () => {
          e.setUpLocationChangeListener();
        };
      },
    },
    { provide: Fr, useValue: 2 },
  ]);
}
var da = new M("");
function Dd(i) {
  return oi(0, [
    { provide: da, useExisting: yd },
    { provide: sn, useExisting: i },
  ]);
}
function Sd() {
  return oi(8, [Ss, { provide: an, useExisting: Ss }]);
}
function Md(i) {
  let e = [
    { provide: ra, useValue: ld },
    {
      provide: oa,
      useValue: g({ skipNextTransition: !!i?.skipInitialTransition }, i),
    },
  ];
  return oi(9, e);
}
var Rs = new M("ROUTER_FORROOT_GUARD"),
  Rd = [
    _e,
    { provide: ei, useClass: Ht },
    Z,
    ti,
    { provide: ht, useFactory: Cd, deps: [Z] },
    Ar,
    [],
  ],
  jr = (() => {
    let e = class e {
      constructor(t) {}
      static forRoot(t, n) {
        return {
          ngModule: e,
          providers: [
            Rd,
            [],
            { provide: on, multi: !0, useValue: t },
            { provide: Rs, useFactory: Ad, deps: [[Z, new kn(), new Eo()]] },
            { provide: ri, useValue: n || {} },
            n?.useHash ? kd() : Td(),
            Id(),
            n?.preloadingStrategy ? Dd(n.preloadingStrategy).ɵproviders : [],
            n?.initialNavigation ? Pd(n) : [],
            n?.bindToComponentInputs ? Sd().ɵproviders : [],
            n?.enableViewTransitions ? Md().ɵproviders : [],
            Nd(),
          ],
        };
      }
      static forChild(t) {
        return {
          ngModule: e,
          providers: [{ provide: on, multi: !0, useValue: t }],
        };
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(Rs, 8));
    }),
      (e.ɵmod = C({ type: e })),
      (e.ɵinj = w({}));
    let i = e;
    return i;
  })();
function Id() {
  return {
    provide: ca,
    useFactory: () => {
      let i = v(es),
        e = v(S),
        r = v(ri),
        t = v(Nr),
        n = v(ei);
      return (
        r.scrollOffset && i.setOffset(r.scrollOffset), new wd(n, t, i, e, r)
      );
    },
  };
}
function kd() {
  return { provide: Un, useClass: Zo };
}
function Td() {
  return { provide: Un, useClass: Go };
}
function Ad(i) {
  return "guarded";
}
function Pd(i) {
  return [
    i.initialNavigation === "disabled" ? Od().ɵproviders : [],
    i.initialNavigation === "enabledBlocking" ? Ed().ɵproviders : [],
  ];
}
var Is = new M("");
function Nd() {
  return [
    { provide: Is, useFactory: xd },
    { provide: Pi, multi: !0, useExisting: Is },
  ];
}
function ai(i, e = 0) {
  return Fd(i) ? Number(i) : e;
}
function Fd(i) {
  return !isNaN(parseFloat(i)) && !isNaN(Number(i));
}
function ft(i) {
  return Array.isArray(i) ? i : [i];
}
function L(i) {
  return i == null ? "" : typeof i == "string" ? i : `${i}px`;
}
function ye(i) {
  return i instanceof H ? i.nativeElement : i;
}
var Ur;
try {
  Ur = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  Ur = !1;
}
var $ = (() => {
  let e = class e {
    constructor(t) {
      (this._platformId = t),
        (this.isBrowser = this._platformId
          ? Jo(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || Ur) &&
          typeof CSS < "u" &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !("MSStream" in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(Oe));
  }),
    (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let i = e;
  return i;
})();
var ci;
function jd() {
  if (ci == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (ci = !0) })
      );
    } finally {
      ci = ci || !1;
    }
  return ci;
}
function gt(i) {
  return jd() ? i : !!i.capture;
}
var Ye;
function ha() {
  if (Ye == null) {
    if (
      typeof document != "object" ||
      !document ||
      typeof Element != "function" ||
      !Element
    )
      return (Ye = !1), Ye;
    if ("scrollBehavior" in document.documentElement.style) Ye = !0;
    else {
      let i = Element.prototype.scrollTo;
      i ? (Ye = !/\{\s*\[native code\]\s*\}/.test(i.toString())) : (Ye = !1);
    }
  }
  return Ye;
}
var Lr;
function Ld() {
  if (Lr == null) {
    let i = typeof document < "u" ? document.head : null;
    Lr = !!(i && (i.createShadowRoot || i.attachShadow));
  }
  return Lr;
}
function ua(i) {
  if (Ld()) {
    let e = i.getRootNode ? i.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && e instanceof ShadowRoot)
      return e;
  }
  return null;
}
function li() {
  let i = typeof document < "u" && document ? document.activeElement : null;
  for (; i && i.shadowRoot; ) {
    let e = i.shadowRoot.activeElement;
    if (e === i) break;
    i = e;
  }
  return i;
}
function le(i) {
  return i.composedPath ? i.composedPath()[0] : i.target;
}
function di() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
var Ud = new M("cdk-dir-doc", { providedIn: "root", factory: Bd });
function Bd() {
  return v(D);
}
var zd =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function Vd(i) {
  let e = i?.toLowerCase() || "";
  return e === "auto" && typeof navigator < "u" && navigator?.language
    ? zd.test(navigator.language)
      ? "rtl"
      : "ltr"
    : e === "rtl"
    ? "rtl"
    : "ltr";
}
var hi = (() => {
  let e = class e {
    constructor(t) {
      if (((this.value = "ltr"), (this.change = new Q()), t)) {
        let n = t.body ? t.body.dir : null,
          o = t.documentElement ? t.documentElement.dir : null;
        this.value = Vd(n || o || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(Ud, 8));
  }),
    (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let i = e;
  return i;
})();
var Ae = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = C({ type: e })),
    (e.ɵinj = w({}));
  let i = e;
  return i;
})();
var Yd = 20,
  fa = (() => {
    let e = class e {
      constructor(t, n, o) {
        (this._ngZone = t),
          (this._platform = n),
          (this._scrolled = new I()),
          (this._globalSubscription = null),
          (this._scrolledCount = 0),
          (this.scrollContainers = new Map()),
          (this._document = o);
      }
      register(t) {
        this.scrollContainers.has(t) ||
          this.scrollContainers.set(
            t,
            t.elementScrolled().subscribe(() => this._scrolled.next(t))
          );
      }
      deregister(t) {
        let n = this.scrollContainers.get(t);
        n && (n.unsubscribe(), this.scrollContainers.delete(t));
      }
      scrolled(t = Yd) {
        return this._platform.isBrowser
          ? new wt((n) => {
              this._globalSubscription || this._addGlobalListener();
              let o =
                t > 0
                  ? this._scrolled.pipe(On(t)).subscribe(n)
                  : this._scrolled.subscribe(n);
              return (
                this._scrolledCount++,
                () => {
                  o.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || this._removeGlobalListener();
                }
              );
            })
          : y();
      }
      ngOnDestroy() {
        this._removeGlobalListener(),
          this.scrollContainers.forEach((t, n) => this.deregister(n)),
          this._scrolled.complete();
      }
      ancestorScrolled(t, n) {
        let o = this.getAncestorScrollContainers(t);
        return this.scrolled(n).pipe(z((s) => !s || o.indexOf(s) > -1));
      }
      getAncestorScrollContainers(t) {
        let n = [];
        return (
          this.scrollContainers.forEach((o, s) => {
            this._scrollableContainsElement(s, t) && n.push(s);
          }),
          n
        );
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _scrollableContainsElement(t, n) {
        let o = ye(n),
          s = t.getElementRef().nativeElement;
        do if (o == s) return !0;
        while ((o = o.parentElement));
        return !1;
      }
      _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
          let t = this._getWindow();
          return bo(t.document, "scroll").subscribe(() =>
            this._scrolled.next()
          );
        });
      }
      _removeGlobalListener() {
        this._globalSubscription &&
          (this._globalSubscription.unsubscribe(),
          (this._globalSubscription = null));
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(S), h($), h(D, 8));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })();
var Gd = 20,
  zr = (() => {
    let e = class e {
      constructor(t, n, o) {
        (this._platform = t),
          (this._change = new I()),
          (this._changeListener = (s) => {
            this._change.next(s);
          }),
          (this._document = o),
          n.runOutsideAngular(() => {
            if (t.isBrowser) {
              let s = this._getWindow();
              s.addEventListener("resize", this._changeListener),
                s.addEventListener("orientationchange", this._changeListener);
            }
            this.change().subscribe(() => (this._viewportSize = null));
          });
      }
      ngOnDestroy() {
        if (this._platform.isBrowser) {
          let t = this._getWindow();
          t.removeEventListener("resize", this._changeListener),
            t.removeEventListener("orientationchange", this._changeListener);
        }
        this._change.complete();
      }
      getViewportSize() {
        this._viewportSize || this._updateViewportSize();
        let t = {
          width: this._viewportSize.width,
          height: this._viewportSize.height,
        };
        return this._platform.isBrowser || (this._viewportSize = null), t;
      }
      getViewportRect() {
        let t = this.getViewportScrollPosition(),
          { width: n, height: o } = this.getViewportSize();
        return {
          top: t.top,
          left: t.left,
          bottom: t.top + o,
          right: t.left + n,
          height: o,
          width: n,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let t = this._document,
          n = this._getWindow(),
          o = t.documentElement,
          s = o.getBoundingClientRect(),
          a = -s.top || t.body.scrollTop || n.scrollY || o.scrollTop || 0,
          c = -s.left || t.body.scrollLeft || n.scrollX || o.scrollLeft || 0;
        return { top: a, left: c };
      }
      change(t = Gd) {
        return t > 0 ? this._change.pipe(On(t)) : this._change;
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _updateViewportSize() {
        let t = this._getWindow();
        this._viewportSize = this._platform.isBrowser
          ? { width: t.innerWidth, height: t.innerHeight }
          : { width: 0, height: 0 };
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h($), h(S), h(D, 8));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })();
var pa = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵmod = C({ type: e })),
      (e.ɵinj = w({}));
    let i = e;
    return i;
  })(),
  Vr = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵmod = C({ type: e })),
      (e.ɵinj = w({ imports: [Ae, pa, Ae, pa] }));
    let i = e;
    return i;
  })();
var ui = class {
    attach(e) {
      return (this._attachedHost = e), e.attach(this);
    }
    detach() {
      let e = this._attachedHost;
      e != null && ((this._attachedHost = null), e.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(e) {
      this._attachedHost = e;
    }
  },
  mt = class extends ui {
    constructor(e, r, t, n, o) {
      super(),
        (this.component = e),
        (this.viewContainerRef = r),
        (this.injector = t),
        (this.componentFactoryResolver = n),
        (this.projectableNodes = o);
    }
  },
  vt = class extends ui {
    constructor(e, r, t, n) {
      super(),
        (this.templateRef = e),
        (this.viewContainerRef = r),
        (this.context = t),
        (this.injector = n);
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(e, r = this.context) {
      return (this.context = r), super.attach(e);
    }
    detach() {
      return (this.context = void 0), super.detach();
    }
  },
  $r = class extends ui {
    constructor(e) {
      super(), (this.element = e instanceof H ? e.nativeElement : e);
    }
  },
  _t = class {
    constructor() {
      (this._isDisposed = !1), (this.attachDomPortal = null);
    }
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(e) {
      if (e instanceof mt)
        return (this._attachedPortal = e), this.attachComponentPortal(e);
      if (e instanceof vt)
        return (this._attachedPortal = e), this.attachTemplatePortal(e);
      if (this.attachDomPortal && e instanceof $r)
        return (this._attachedPortal = e), this.attachDomPortal(e);
    }
    detach() {
      this._attachedPortal &&
        (this._attachedPortal.setAttachedHost(null),
        (this._attachedPortal = null)),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        (this._isDisposed = !0);
    }
    setDisposeFn(e) {
      this._disposeFn = e;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
    }
  };
var dn = class extends _t {
  constructor(e, r, t, n, o) {
    super(),
      (this.outletElement = e),
      (this._componentFactoryResolver = r),
      (this._appRef = t),
      (this._defaultInjector = n),
      (this.attachDomPortal = (s) => {
        this._document;
        let a = s.element;
        a.parentNode;
        let c = this._document.createComment("dom-portal");
        a.parentNode.insertBefore(c, a),
          this.outletElement.appendChild(a),
          (this._attachedPortal = s),
          super.setDisposeFn(() => {
            c.parentNode && c.parentNode.replaceChild(a, c);
          });
      }),
      (this._document = o);
  }
  attachComponentPortal(e) {
    let t = (
        e.componentFactoryResolver || this._componentFactoryResolver
      ).resolveComponentFactory(e.component),
      n;
    return (
      e.viewContainerRef
        ? ((n = e.viewContainerRef.createComponent(
            t,
            e.viewContainerRef.length,
            e.injector || e.viewContainerRef.injector,
            e.projectableNodes || void 0
          )),
          this.setDisposeFn(() => n.destroy()))
        : ((n = t.create(e.injector || this._defaultInjector || K.NULL)),
          this._appRef.attachView(n.hostView),
          this.setDisposeFn(() => {
            this._appRef.viewCount > 0 && this._appRef.detachView(n.hostView),
              n.destroy();
          })),
      this.outletElement.appendChild(this._getComponentRootNode(n)),
      (this._attachedPortal = e),
      n
    );
  }
  attachTemplatePortal(e) {
    let r = e.viewContainerRef,
      t = r.createEmbeddedView(e.templateRef, e.context, {
        injector: e.injector,
      });
    return (
      t.rootNodes.forEach((n) => this.outletElement.appendChild(n)),
      t.detectChanges(),
      this.setDisposeFn(() => {
        let n = r.indexOf(t);
        n !== -1 && r.remove(n);
      }),
      (this._attachedPortal = e),
      t
    );
  }
  dispose() {
    super.dispose(), this.outletElement.remove();
  }
  _getComponentRootNode(e) {
    return e.hostView.rootNodes[0];
  }
};
var pi = (() => {
  let e = class e extends _t {
    constructor(t, n, o) {
      super(),
        (this._componentFactoryResolver = t),
        (this._viewContainerRef = n),
        (this._isInitialized = !1),
        (this.attached = new Q()),
        (this.attachDomPortal = (s) => {
          this._document;
          let a = s.element;
          a.parentNode;
          let c = this._document.createComment("dom-portal");
          s.setAttachedHost(this),
            a.parentNode.insertBefore(c, a),
            this._getRootNode().appendChild(a),
            (this._attachedPortal = s),
            super.setDisposeFn(() => {
              c.parentNode && c.parentNode.replaceChild(a, c);
            });
        }),
        (this._document = o);
    }
    get portal() {
      return this._attachedPortal;
    }
    set portal(t) {
      (this.hasAttached() && !t && !this._isInitialized) ||
        (this.hasAttached() && super.detach(),
        t && super.attach(t),
        (this._attachedPortal = t || null));
    }
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = !0;
    }
    ngOnDestroy() {
      super.dispose(), (this._attachedRef = this._attachedPortal = null);
    }
    attachComponentPortal(t) {
      t.setAttachedHost(this);
      let n =
          t.viewContainerRef != null
            ? t.viewContainerRef
            : this._viewContainerRef,
        s = (
          t.componentFactoryResolver || this._componentFactoryResolver
        ).resolveComponentFactory(t.component),
        a = n.createComponent(
          s,
          n.length,
          t.injector || n.injector,
          t.projectableNodes || void 0
        );
      return (
        n !== this._viewContainerRef &&
          this._getRootNode().appendChild(a.hostView.rootNodes[0]),
        super.setDisposeFn(() => a.destroy()),
        (this._attachedPortal = t),
        (this._attachedRef = a),
        this.attached.emit(a),
        a
      );
    }
    attachTemplatePortal(t) {
      t.setAttachedHost(this);
      let n = this._viewContainerRef.createEmbeddedView(
        t.templateRef,
        t.context,
        { injector: t.injector }
      );
      return (
        super.setDisposeFn(() => this._viewContainerRef.clear()),
        (this._attachedPortal = t),
        (this._attachedRef = n),
        this.attached.emit(n),
        n
      );
    }
    _getRootNode() {
      let t = this._viewContainerRef.element.nativeElement;
      return t.nodeType === t.ELEMENT_NODE ? t : t.parentNode;
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(x(Di), x(nt), x(D));
  }),
    (e.ɵdir = ce({
      type: e,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: { portal: [me.None, "cdkPortalOutlet", "portal"] },
      outputs: { attached: "attached" },
      exportAs: ["cdkPortalOutlet"],
      standalone: !0,
      features: [Le],
    }));
  let i = e;
  return i;
})();
var Ge = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = C({ type: e })),
    (e.ɵinj = w({}));
  let i = e;
  return i;
})();
function hn(i, ...e) {
  return e.length
    ? e.some((r) => i[r])
    : i.altKey || i.shiftKey || i.ctrlKey || i.metaKey;
}
var ga = ha(),
  Hr = class {
    constructor(e, r) {
      (this._viewportRuler = e),
        (this._previousHTMLStyles = { top: "", left: "" }),
        (this._isEnabled = !1),
        (this._document = r);
    }
    attach() {}
    enable() {
      if (this._canBeEnabled()) {
        let e = this._document.documentElement;
        (this._previousScrollPosition =
          this._viewportRuler.getViewportScrollPosition()),
          (this._previousHTMLStyles.left = e.style.left || ""),
          (this._previousHTMLStyles.top = e.style.top || ""),
          (e.style.left = L(-this._previousScrollPosition.left)),
          (e.style.top = L(-this._previousScrollPosition.top)),
          e.classList.add("cdk-global-scrollblock"),
          (this._isEnabled = !0);
      }
    }
    disable() {
      if (this._isEnabled) {
        let e = this._document.documentElement,
          r = this._document.body,
          t = e.style,
          n = r.style,
          o = t.scrollBehavior || "",
          s = n.scrollBehavior || "";
        (this._isEnabled = !1),
          (t.left = this._previousHTMLStyles.left),
          (t.top = this._previousHTMLStyles.top),
          e.classList.remove("cdk-global-scrollblock"),
          ga && (t.scrollBehavior = n.scrollBehavior = "auto"),
          window.scroll(
            this._previousScrollPosition.left,
            this._previousScrollPosition.top
          ),
          ga && ((t.scrollBehavior = o), (n.scrollBehavior = s));
      }
    }
    _canBeEnabled() {
      if (
        this._document.documentElement.classList.contains(
          "cdk-global-scrollblock"
        ) ||
        this._isEnabled
      )
        return !1;
      let r = this._document.body,
        t = this._viewportRuler.getViewportSize();
      return r.scrollHeight > t.height || r.scrollWidth > t.width;
    }
  };
var Wr = class {
    constructor(e, r, t, n) {
      (this._scrollDispatcher = e),
        (this._ngZone = r),
        (this._viewportRuler = t),
        (this._config = n),
        (this._scrollSubscription = null),
        (this._detach = () => {
          this.disable(),
            this._overlayRef.hasAttached() &&
              this._ngZone.run(() => this._overlayRef.detach());
        });
    }
    attach(e) {
      this._overlayRef, (this._overlayRef = e);
    }
    enable() {
      if (this._scrollSubscription) return;
      let e = this._scrollDispatcher
        .scrolled(0)
        .pipe(
          z(
            (r) =>
              !r ||
              !this._overlayRef.overlayElement.contains(
                r.getElementRef().nativeElement
              )
          )
        );
      this._config && this._config.threshold && this._config.threshold > 1
        ? ((this._initialScrollPosition =
            this._viewportRuler.getViewportScrollPosition().top),
          (this._scrollSubscription = e.subscribe(() => {
            let r = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(r - this._initialScrollPosition) > this._config.threshold
              ? this._detach()
              : this._overlayRef.updatePosition();
          })))
        : (this._scrollSubscription = e.subscribe(this._detach));
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  un = class {
    enable() {}
    disable() {}
    attach() {}
  };
function Yr(i, e) {
  return e.some((r) => {
    let t = i.bottom < r.top,
      n = i.top > r.bottom,
      o = i.right < r.left,
      s = i.left > r.right;
    return t || n || o || s;
  });
}
function ma(i, e) {
  return e.some((r) => {
    let t = i.top < r.top,
      n = i.bottom > r.bottom,
      o = i.left < r.left,
      s = i.right > r.right;
    return t || n || o || s;
  });
}
var Gr = class {
    constructor(e, r, t, n) {
      (this._scrollDispatcher = e),
        (this._viewportRuler = r),
        (this._ngZone = t),
        (this._config = n),
        (this._scrollSubscription = null);
    }
    attach(e) {
      this._overlayRef, (this._overlayRef = e);
    }
    enable() {
      if (!this._scrollSubscription) {
        let e = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher
          .scrolled(e)
          .subscribe(() => {
            if (
              (this._overlayRef.updatePosition(),
              this._config && this._config.autoClose)
            ) {
              let r = this._overlayRef.overlayElement.getBoundingClientRect(),
                { width: t, height: n } = this._viewportRuler.getViewportSize();
              Yr(r, [
                { width: t, height: n, bottom: n, right: t, top: 0, left: 0 },
              ]) &&
                (this.disable(),
                this._ngZone.run(() => this._overlayRef.detach()));
            }
          });
      }
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  qd = (() => {
    let e = class e {
      constructor(t, n, o, s) {
        (this._scrollDispatcher = t),
          (this._viewportRuler = n),
          (this._ngZone = o),
          (this.noop = () => new un()),
          (this.close = (a) =>
            new Wr(
              this._scrollDispatcher,
              this._ngZone,
              this._viewportRuler,
              a
            )),
          (this.block = () => new Hr(this._viewportRuler, this._document)),
          (this.reposition = (a) =>
            new Gr(
              this._scrollDispatcher,
              this._viewportRuler,
              this._ngZone,
              a
            )),
          (this._document = s);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(fa), h(zr), h(S), h(D));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })(),
  fi = class {
    constructor(e) {
      if (
        ((this.scrollStrategy = new un()),
        (this.panelClass = ""),
        (this.hasBackdrop = !1),
        (this.backdropClass = "cdk-overlay-dark-backdrop"),
        (this.disposeOnNavigation = !1),
        e)
      ) {
        let r = Object.keys(e);
        for (let t of r) e[t] !== void 0 && (this[t] = e[t]);
      }
    }
  };
var Zr = class {
  constructor(e, r) {
    (this.connectionPair = e), (this.scrollableViewProperties = r);
  }
};
var wa = (() => {
    let e = class e {
      constructor(t) {
        (this._attachedOverlays = []), (this._document = t);
      }
      ngOnDestroy() {
        this.detach();
      }
      add(t) {
        this.remove(t), this._attachedOverlays.push(t);
      }
      remove(t) {
        let n = this._attachedOverlays.indexOf(t);
        n > -1 && this._attachedOverlays.splice(n, 1),
          this._attachedOverlays.length === 0 && this.detach();
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(D));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })(),
  Xd = (() => {
    let e = class e extends wa {
      constructor(t, n) {
        super(t),
          (this._ngZone = n),
          (this._keydownListener = (o) => {
            let s = this._attachedOverlays;
            for (let a = s.length - 1; a > -1; a--)
              if (s[a]._keydownEvents.observers.length > 0) {
                let c = s[a]._keydownEvents;
                this._ngZone ? this._ngZone.run(() => c.next(o)) : c.next(o);
                break;
              }
          });
      }
      add(t) {
        super.add(t),
          this._isAttached ||
            (this._ngZone
              ? this._ngZone.runOutsideAngular(() =>
                  this._document.body.addEventListener(
                    "keydown",
                    this._keydownListener
                  )
                )
              : this._document.body.addEventListener(
                  "keydown",
                  this._keydownListener
                ),
            (this._isAttached = !0));
      }
      detach() {
        this._isAttached &&
          (this._document.body.removeEventListener(
            "keydown",
            this._keydownListener
          ),
          (this._isAttached = !1));
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(D), h(S, 8));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })(),
  Kd = (() => {
    let e = class e extends wa {
      constructor(t, n, o) {
        super(t),
          (this._platform = n),
          (this._ngZone = o),
          (this._cursorStyleIsSet = !1),
          (this._pointerDownListener = (s) => {
            this._pointerDownEventTarget = le(s);
          }),
          (this._clickListener = (s) => {
            let a = le(s),
              c =
                s.type === "click" && this._pointerDownEventTarget
                  ? this._pointerDownEventTarget
                  : a;
            this._pointerDownEventTarget = null;
            let l = this._attachedOverlays.slice();
            for (let d = l.length - 1; d > -1; d--) {
              let u = l[d];
              if (
                u._outsidePointerEvents.observers.length < 1 ||
                !u.hasAttached()
              )
                continue;
              if (u.overlayElement.contains(a) || u.overlayElement.contains(c))
                break;
              let b = u._outsidePointerEvents;
              this._ngZone ? this._ngZone.run(() => b.next(s)) : b.next(s);
            }
          });
      }
      add(t) {
        if ((super.add(t), !this._isAttached)) {
          let n = this._document.body;
          this._ngZone
            ? this._ngZone.runOutsideAngular(() => this._addEventListeners(n))
            : this._addEventListeners(n),
            this._platform.IOS &&
              !this._cursorStyleIsSet &&
              ((this._cursorOriginalValue = n.style.cursor),
              (n.style.cursor = "pointer"),
              (this._cursorStyleIsSet = !0)),
            (this._isAttached = !0);
        }
      }
      detach() {
        if (this._isAttached) {
          let t = this._document.body;
          t.removeEventListener("pointerdown", this._pointerDownListener, !0),
            t.removeEventListener("click", this._clickListener, !0),
            t.removeEventListener("auxclick", this._clickListener, !0),
            t.removeEventListener("contextmenu", this._clickListener, !0),
            this._platform.IOS &&
              this._cursorStyleIsSet &&
              ((t.style.cursor = this._cursorOriginalValue),
              (this._cursorStyleIsSet = !1)),
            (this._isAttached = !1);
        }
      }
      _addEventListeners(t) {
        t.addEventListener("pointerdown", this._pointerDownListener, !0),
          t.addEventListener("click", this._clickListener, !0),
          t.addEventListener("auxclick", this._clickListener, !0),
          t.addEventListener("contextmenu", this._clickListener, !0);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(D), h($), h(S, 8));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })(),
  bt = (() => {
    let e = class e {
      constructor(t, n) {
        (this._platform = n), (this._document = t);
      }
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      getContainerElement() {
        return (
          this._containerElement || this._createContainer(),
          this._containerElement
        );
      }
      _createContainer() {
        let t = "cdk-overlay-container";
        if (this._platform.isBrowser || di()) {
          let o = this._document.querySelectorAll(
            `.${t}[platform="server"], .${t}[platform="test"]`
          );
          for (let s = 0; s < o.length; s++) o[s].remove();
        }
        let n = this._document.createElement("div");
        n.classList.add(t),
          di()
            ? n.setAttribute("platform", "test")
            : this._platform.isBrowser || n.setAttribute("platform", "server"),
          this._document.body.appendChild(n),
          (this._containerElement = n);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(D), h($));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })(),
  we = class {
    constructor(e, r, t, n, o, s, a, c, l, d = !1) {
      (this._portalOutlet = e),
        (this._host = r),
        (this._pane = t),
        (this._config = n),
        (this._ngZone = o),
        (this._keyboardDispatcher = s),
        (this._document = a),
        (this._location = c),
        (this._outsideClickDispatcher = l),
        (this._animationsDisabled = d),
        (this._backdropElement = null),
        (this._backdropClick = new I()),
        (this._attachments = new I()),
        (this._detachments = new I()),
        (this._locationChanges = Ne.EMPTY),
        (this._backdropClickHandler = (u) => this._backdropClick.next(u)),
        (this._backdropTransitionendHandler = (u) => {
          this._disposeBackdrop(u.target);
        }),
        (this._keydownEvents = new I()),
        (this._outsidePointerEvents = new I()),
        n.scrollStrategy &&
          ((this._scrollStrategy = n.scrollStrategy),
          this._scrollStrategy.attach(this)),
        (this._positionStrategy = n.positionStrategy);
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropElement;
    }
    get hostElement() {
      return this._host;
    }
    attach(e) {
      !this._host.parentElement &&
        this._previousHostParent &&
        this._previousHostParent.appendChild(this._host);
      let r = this._portalOutlet.attach(e);
      return (
        this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._ngZone.onStable.pipe(Y(1)).subscribe(() => {
          this.hasAttached() && this.updatePosition();
        }),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass &&
          this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation &&
          (this._locationChanges = this._location.subscribe(() =>
            this.dispose()
          )),
        this._outsideClickDispatcher.add(this),
        typeof r?.onDestroy == "function" &&
          r.onDestroy(() => {
            this.hasAttached() &&
              this._ngZone.runOutsideAngular(() =>
                Promise.resolve().then(() => this.detach())
              );
          }),
        r
      );
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy &&
          this._positionStrategy.detach &&
          this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
      let e = this._portalOutlet.detach();
      return (
        this._detachments.next(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenStable(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        e
      );
    }
    dispose() {
      let e = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._disposeBackdrop(this._backdropElement),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        (this._previousHostParent = this._pane = this._host = null),
        e && this._detachments.next(),
        this._detachments.complete();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(e) {
      e !== this._positionStrategy &&
        (this._positionStrategy && this._positionStrategy.dispose(),
        (this._positionStrategy = e),
        this.hasAttached() && (e.attach(this), this.updatePosition()));
    }
    updateSize(e) {
      (this._config = g(g({}, this._config), e)), this._updateElementSize();
    }
    setDirection(e) {
      (this._config = U(g({}, this._config), { direction: e })),
        this._updateElementDirection();
    }
    addPanelClass(e) {
      this._pane && this._toggleClasses(this._pane, e, !0);
    }
    removePanelClass(e) {
      this._pane && this._toggleClasses(this._pane, e, !1);
    }
    getDirection() {
      let e = this._config.direction;
      return e ? (typeof e == "string" ? e : e.value) : "ltr";
    }
    updateScrollStrategy(e) {
      e !== this._scrollStrategy &&
        (this._disposeScrollStrategy(),
        (this._scrollStrategy = e),
        this.hasAttached() && (e.attach(this), e.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute("dir", this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      let e = this._pane.style;
      (e.width = L(this._config.width)),
        (e.height = L(this._config.height)),
        (e.minWidth = L(this._config.minWidth)),
        (e.minHeight = L(this._config.minHeight)),
        (e.maxWidth = L(this._config.maxWidth)),
        (e.maxHeight = L(this._config.maxHeight));
    }
    _togglePointerEvents(e) {
      this._pane.style.pointerEvents = e ? "" : "none";
    }
    _attachBackdrop() {
      let e = "cdk-overlay-backdrop-showing";
      (this._backdropElement = this._document.createElement("div")),
        this._backdropElement.classList.add("cdk-overlay-backdrop"),
        this._animationsDisabled &&
          this._backdropElement.classList.add(
            "cdk-overlay-backdrop-noop-animation"
          ),
        this._config.backdropClass &&
          this._toggleClasses(
            this._backdropElement,
            this._config.backdropClass,
            !0
          ),
        this._host.parentElement.insertBefore(
          this._backdropElement,
          this._host
        ),
        this._backdropElement.addEventListener(
          "click",
          this._backdropClickHandler
        ),
        !this._animationsDisabled && typeof requestAnimationFrame < "u"
          ? this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => {
                this._backdropElement && this._backdropElement.classList.add(e);
              });
            })
          : this._backdropElement.classList.add(e);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      let e = this._backdropElement;
      if (e) {
        if (this._animationsDisabled) {
          this._disposeBackdrop(e);
          return;
        }
        e.classList.remove("cdk-overlay-backdrop-showing"),
          this._ngZone.runOutsideAngular(() => {
            e.addEventListener(
              "transitionend",
              this._backdropTransitionendHandler
            );
          }),
          (e.style.pointerEvents = "none"),
          (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
            setTimeout(() => {
              this._disposeBackdrop(e);
            }, 500)
          ));
      }
    }
    _toggleClasses(e, r, t) {
      let n = ft(r || []).filter((o) => !!o);
      n.length && (t ? e.classList.add(...n) : e.classList.remove(...n));
    }
    _detachContentWhenStable() {
      this._ngZone.runOutsideAngular(() => {
        let e = this._ngZone.onStable
          .pipe(ge(wi(this._attachments, this._detachments)))
          .subscribe(() => {
            (!this._pane || !this._host || this._pane.children.length === 0) &&
              (this._pane &&
                this._config.panelClass &&
                this._toggleClasses(this._pane, this._config.panelClass, !1),
              this._host &&
                this._host.parentElement &&
                ((this._previousHostParent = this._host.parentElement),
                this._host.remove()),
              e.unsubscribe());
          });
      });
    }
    _disposeScrollStrategy() {
      let e = this._scrollStrategy;
      e && (e.disable(), e.detach && e.detach());
    }
    _disposeBackdrop(e) {
      e &&
        (e.removeEventListener("click", this._backdropClickHandler),
        e.removeEventListener(
          "transitionend",
          this._backdropTransitionendHandler
        ),
        e.remove(),
        this._backdropElement === e && (this._backdropElement = null)),
        this._backdropTimeout &&
          (clearTimeout(this._backdropTimeout),
          (this._backdropTimeout = void 0));
    }
  },
  va = "cdk-overlay-connected-position-bounding-box",
  Qd = /([A-Za-z%]+)$/,
  qr = class {
    get positions() {
      return this._preferredPositions;
    }
    constructor(e, r, t, n, o) {
      (this._viewportRuler = r),
        (this._document = t),
        (this._platform = n),
        (this._overlayContainer = o),
        (this._lastBoundingBoxSize = { width: 0, height: 0 }),
        (this._isPushed = !1),
        (this._canPush = !0),
        (this._growAfterOpen = !1),
        (this._hasFlexibleDimensions = !0),
        (this._positionLocked = !1),
        (this._viewportMargin = 0),
        (this._scrollables = []),
        (this._preferredPositions = []),
        (this._positionChanges = new I()),
        (this._resizeSubscription = Ne.EMPTY),
        (this._offsetX = 0),
        (this._offsetY = 0),
        (this._appliedPanelClasses = []),
        (this.positionChanges = this._positionChanges),
        this.setOrigin(e);
    }
    attach(e) {
      this._overlayRef && this._overlayRef,
        this._validatePositions(),
        e.hostElement.classList.add(va),
        (this._overlayRef = e),
        (this._boundingBox = e.hostElement),
        (this._pane = e.overlayElement),
        (this._isDisposed = !1),
        (this._isInitialRender = !0),
        (this._lastPosition = null),
        this._resizeSubscription.unsubscribe(),
        (this._resizeSubscription = this._viewportRuler
          .change()
          .subscribe(() => {
            (this._isInitialRender = !0), this.apply();
          }));
    }
    apply() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      if (
        !this._isInitialRender &&
        this._positionLocked &&
        this._lastPosition
      ) {
        this.reapplyLastPosition();
        return;
      }
      this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        (this._viewportRect = this._getNarrowedViewportRect()),
        (this._originRect = this._getOriginRect()),
        (this._overlayRect = this._pane.getBoundingClientRect()),
        (this._containerRect = this._overlayContainer
          .getContainerElement()
          .getBoundingClientRect());
      let e = this._originRect,
        r = this._overlayRect,
        t = this._viewportRect,
        n = this._containerRect,
        o = [],
        s;
      for (let a of this._preferredPositions) {
        let c = this._getOriginPoint(e, n, a),
          l = this._getOverlayPoint(c, r, a),
          d = this._getOverlayFit(l, r, t, a);
        if (d.isCompletelyWithinViewport) {
          (this._isPushed = !1), this._applyPosition(a, c);
          return;
        }
        if (this._canFitWithFlexibleDimensions(d, l, t)) {
          o.push({
            position: a,
            origin: c,
            overlayRect: r,
            boundingBoxRect: this._calculateBoundingBoxRect(c, a),
          });
          continue;
        }
        (!s || s.overlayFit.visibleArea < d.visibleArea) &&
          (s = {
            overlayFit: d,
            overlayPoint: l,
            originPoint: c,
            position: a,
            overlayRect: r,
          });
      }
      if (o.length) {
        let a = null,
          c = -1;
        for (let l of o) {
          let d =
            l.boundingBoxRect.width *
            l.boundingBoxRect.height *
            (l.position.weight || 1);
          d > c && ((c = d), (a = l));
        }
        (this._isPushed = !1), this._applyPosition(a.position, a.origin);
        return;
      }
      if (this._canPush) {
        (this._isPushed = !0), this._applyPosition(s.position, s.originPoint);
        return;
      }
      this._applyPosition(s.position, s.originPoint);
    }
    detach() {
      this._clearPanelClasses(),
        (this._lastPosition = null),
        (this._previousPushAmount = null),
        this._resizeSubscription.unsubscribe();
    }
    dispose() {
      this._isDisposed ||
        (this._boundingBox &&
          Ze(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          }),
        this._pane && this._resetOverlayElementStyles(),
        this._overlayRef && this._overlayRef.hostElement.classList.remove(va),
        this.detach(),
        this._positionChanges.complete(),
        (this._overlayRef = this._boundingBox = null),
        (this._isDisposed = !0));
    }
    reapplyLastPosition() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      let e = this._lastPosition;
      if (e) {
        (this._originRect = this._getOriginRect()),
          (this._overlayRect = this._pane.getBoundingClientRect()),
          (this._viewportRect = this._getNarrowedViewportRect()),
          (this._containerRect = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect());
        let r = this._getOriginPoint(this._originRect, this._containerRect, e);
        this._applyPosition(e, r);
      } else this.apply();
    }
    withScrollableContainers(e) {
      return (this._scrollables = e), this;
    }
    withPositions(e) {
      return (
        (this._preferredPositions = e),
        e.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this
      );
    }
    withViewportMargin(e) {
      return (this._viewportMargin = e), this;
    }
    withFlexibleDimensions(e = !0) {
      return (this._hasFlexibleDimensions = e), this;
    }
    withGrowAfterOpen(e = !0) {
      return (this._growAfterOpen = e), this;
    }
    withPush(e = !0) {
      return (this._canPush = e), this;
    }
    withLockedPosition(e = !0) {
      return (this._positionLocked = e), this;
    }
    setOrigin(e) {
      return (this._origin = e), this;
    }
    withDefaultOffsetX(e) {
      return (this._offsetX = e), this;
    }
    withDefaultOffsetY(e) {
      return (this._offsetY = e), this;
    }
    withTransformOriginOn(e) {
      return (this._transformOriginSelector = e), this;
    }
    _getOriginPoint(e, r, t) {
      let n;
      if (t.originX == "center") n = e.left + e.width / 2;
      else {
        let s = this._isRtl() ? e.right : e.left,
          a = this._isRtl() ? e.left : e.right;
        n = t.originX == "start" ? s : a;
      }
      r.left < 0 && (n -= r.left);
      let o;
      return (
        t.originY == "center"
          ? (o = e.top + e.height / 2)
          : (o = t.originY == "top" ? e.top : e.bottom),
        r.top < 0 && (o -= r.top),
        { x: n, y: o }
      );
    }
    _getOverlayPoint(e, r, t) {
      let n;
      t.overlayX == "center"
        ? (n = -r.width / 2)
        : t.overlayX === "start"
        ? (n = this._isRtl() ? -r.width : 0)
        : (n = this._isRtl() ? 0 : -r.width);
      let o;
      return (
        t.overlayY == "center"
          ? (o = -r.height / 2)
          : (o = t.overlayY == "top" ? 0 : -r.height),
        { x: e.x + n, y: e.y + o }
      );
    }
    _getOverlayFit(e, r, t, n) {
      let o = ba(r),
        { x: s, y: a } = e,
        c = this._getOffset(n, "x"),
        l = this._getOffset(n, "y");
      c && (s += c), l && (a += l);
      let d = 0 - s,
        u = s + o.width - t.width,
        b = 0 - a,
        O = a + o.height - t.height,
        P = this._subtractOverflows(o.width, d, u),
        N = this._subtractOverflows(o.height, b, O),
        ae = P * N;
      return {
        visibleArea: ae,
        isCompletelyWithinViewport: o.width * o.height === ae,
        fitsInViewportVertically: N === o.height,
        fitsInViewportHorizontally: P == o.width,
      };
    }
    _canFitWithFlexibleDimensions(e, r, t) {
      if (this._hasFlexibleDimensions) {
        let n = t.bottom - r.y,
          o = t.right - r.x,
          s = _a(this._overlayRef.getConfig().minHeight),
          a = _a(this._overlayRef.getConfig().minWidth),
          c = e.fitsInViewportVertically || (s != null && s <= n),
          l = e.fitsInViewportHorizontally || (a != null && a <= o);
        return c && l;
      }
      return !1;
    }
    _pushOverlayOnScreen(e, r, t) {
      if (this._previousPushAmount && this._positionLocked)
        return {
          x: e.x + this._previousPushAmount.x,
          y: e.y + this._previousPushAmount.y,
        };
      let n = ba(r),
        o = this._viewportRect,
        s = Math.max(e.x + n.width - o.width, 0),
        a = Math.max(e.y + n.height - o.height, 0),
        c = Math.max(o.top - t.top - e.y, 0),
        l = Math.max(o.left - t.left - e.x, 0),
        d = 0,
        u = 0;
      return (
        n.width <= o.width
          ? (d = l || -s)
          : (d = e.x < this._viewportMargin ? o.left - t.left - e.x : 0),
        n.height <= o.height
          ? (u = c || -a)
          : (u = e.y < this._viewportMargin ? o.top - t.top - e.y : 0),
        (this._previousPushAmount = { x: d, y: u }),
        { x: e.x + d, y: e.y + u }
      );
    }
    _applyPosition(e, r) {
      if (
        (this._setTransformOrigin(e),
        this._setOverlayElementStyles(r, e),
        this._setBoundingBoxStyles(r, e),
        e.panelClass && this._addPanelClasses(e.panelClass),
        this._positionChanges.observers.length)
      ) {
        let t = this._getScrollVisibility();
        if (
          e !== this._lastPosition ||
          !this._lastScrollVisibility ||
          !Jd(this._lastScrollVisibility, t)
        ) {
          let n = new Zr(e, t);
          this._positionChanges.next(n);
        }
        this._lastScrollVisibility = t;
      }
      (this._lastPosition = e), (this._isInitialRender = !1);
    }
    _setTransformOrigin(e) {
      if (!this._transformOriginSelector) return;
      let r = this._boundingBox.querySelectorAll(this._transformOriginSelector),
        t,
        n = e.overlayY;
      e.overlayX === "center"
        ? (t = "center")
        : this._isRtl()
        ? (t = e.overlayX === "start" ? "right" : "left")
        : (t = e.overlayX === "start" ? "left" : "right");
      for (let o = 0; o < r.length; o++)
        r[o].style.transformOrigin = `${t} ${n}`;
    }
    _calculateBoundingBoxRect(e, r) {
      let t = this._viewportRect,
        n = this._isRtl(),
        o,
        s,
        a;
      if (r.overlayY === "top")
        (s = e.y), (o = t.height - s + this._viewportMargin);
      else if (r.overlayY === "bottom")
        (a = t.height - e.y + this._viewportMargin * 2),
          (o = t.height - a + this._viewportMargin);
      else {
        let O = Math.min(t.bottom - e.y + t.top, e.y),
          P = this._lastBoundingBoxSize.height;
        (o = O * 2),
          (s = e.y - O),
          o > P &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (s = e.y - P / 2);
      }
      let c = (r.overlayX === "start" && !n) || (r.overlayX === "end" && n),
        l = (r.overlayX === "end" && !n) || (r.overlayX === "start" && n),
        d,
        u,
        b;
      if (l)
        (b = t.width - e.x + this._viewportMargin * 2),
          (d = e.x - this._viewportMargin);
      else if (c) (u = e.x), (d = t.right - e.x);
      else {
        let O = Math.min(t.right - e.x + t.left, e.x),
          P = this._lastBoundingBoxSize.width;
        (d = O * 2),
          (u = e.x - O),
          d > P &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (u = e.x - P / 2);
      }
      return { top: s, left: u, bottom: a, right: b, width: d, height: o };
    }
    _setBoundingBoxStyles(e, r) {
      let t = this._calculateBoundingBoxRect(e, r);
      !this._isInitialRender &&
        !this._growAfterOpen &&
        ((t.height = Math.min(t.height, this._lastBoundingBoxSize.height)),
        (t.width = Math.min(t.width, this._lastBoundingBoxSize.width)));
      let n = {};
      if (this._hasExactPosition())
        (n.top = n.left = "0"),
          (n.bottom = n.right = n.maxHeight = n.maxWidth = ""),
          (n.width = n.height = "100%");
      else {
        let o = this._overlayRef.getConfig().maxHeight,
          s = this._overlayRef.getConfig().maxWidth;
        (n.height = L(t.height)),
          (n.top = L(t.top)),
          (n.bottom = L(t.bottom)),
          (n.width = L(t.width)),
          (n.left = L(t.left)),
          (n.right = L(t.right)),
          r.overlayX === "center"
            ? (n.alignItems = "center")
            : (n.alignItems = r.overlayX === "end" ? "flex-end" : "flex-start"),
          r.overlayY === "center"
            ? (n.justifyContent = "center")
            : (n.justifyContent =
                r.overlayY === "bottom" ? "flex-end" : "flex-start"),
          o && (n.maxHeight = L(o)),
          s && (n.maxWidth = L(s));
      }
      (this._lastBoundingBoxSize = t), Ze(this._boundingBox.style, n);
    }
    _resetBoundingBoxStyles() {
      Ze(this._boundingBox.style, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: "",
      });
    }
    _resetOverlayElementStyles() {
      Ze(this._pane.style, {
        top: "",
        left: "",
        bottom: "",
        right: "",
        position: "",
        transform: "",
      });
    }
    _setOverlayElementStyles(e, r) {
      let t = {},
        n = this._hasExactPosition(),
        o = this._hasFlexibleDimensions,
        s = this._overlayRef.getConfig();
      if (n) {
        let d = this._viewportRuler.getViewportScrollPosition();
        Ze(t, this._getExactOverlayY(r, e, d)),
          Ze(t, this._getExactOverlayX(r, e, d));
      } else t.position = "static";
      let a = "",
        c = this._getOffset(r, "x"),
        l = this._getOffset(r, "y");
      c && (a += `translateX(${c}px) `),
        l && (a += `translateY(${l}px)`),
        (t.transform = a.trim()),
        s.maxHeight &&
          (n ? (t.maxHeight = L(s.maxHeight)) : o && (t.maxHeight = "")),
        s.maxWidth &&
          (n ? (t.maxWidth = L(s.maxWidth)) : o && (t.maxWidth = "")),
        Ze(this._pane.style, t);
    }
    _getExactOverlayY(e, r, t) {
      let n = { top: "", bottom: "" },
        o = this._getOverlayPoint(r, this._overlayRect, e);
      if (
        (this._isPushed &&
          (o = this._pushOverlayOnScreen(o, this._overlayRect, t)),
        e.overlayY === "bottom")
      ) {
        let s = this._document.documentElement.clientHeight;
        n.bottom = `${s - (o.y + this._overlayRect.height)}px`;
      } else n.top = L(o.y);
      return n;
    }
    _getExactOverlayX(e, r, t) {
      let n = { left: "", right: "" },
        o = this._getOverlayPoint(r, this._overlayRect, e);
      this._isPushed &&
        (o = this._pushOverlayOnScreen(o, this._overlayRect, t));
      let s;
      if (
        (this._isRtl()
          ? (s = e.overlayX === "end" ? "left" : "right")
          : (s = e.overlayX === "end" ? "right" : "left"),
        s === "right")
      ) {
        let a = this._document.documentElement.clientWidth;
        n.right = `${a - (o.x + this._overlayRect.width)}px`;
      } else n.left = L(o.x);
      return n;
    }
    _getScrollVisibility() {
      let e = this._getOriginRect(),
        r = this._pane.getBoundingClientRect(),
        t = this._scrollables.map((n) =>
          n.getElementRef().nativeElement.getBoundingClientRect()
        );
      return {
        isOriginClipped: ma(e, t),
        isOriginOutsideView: Yr(e, t),
        isOverlayClipped: ma(r, t),
        isOverlayOutsideView: Yr(r, t),
      };
    }
    _subtractOverflows(e, ...r) {
      return r.reduce((t, n) => t - Math.max(n, 0), e);
    }
    _getNarrowedViewportRect() {
      let e = this._document.documentElement.clientWidth,
        r = this._document.documentElement.clientHeight,
        t = this._viewportRuler.getViewportScrollPosition();
      return {
        top: t.top + this._viewportMargin,
        left: t.left + this._viewportMargin,
        right: t.left + e - this._viewportMargin,
        bottom: t.top + r - this._viewportMargin,
        width: e - 2 * this._viewportMargin,
        height: r - 2 * this._viewportMargin,
      };
    }
    _isRtl() {
      return this._overlayRef.getDirection() === "rtl";
    }
    _hasExactPosition() {
      return !this._hasFlexibleDimensions || this._isPushed;
    }
    _getOffset(e, r) {
      return r === "x"
        ? e.offsetX == null
          ? this._offsetX
          : e.offsetX
        : e.offsetY == null
        ? this._offsetY
        : e.offsetY;
    }
    _validatePositions() {}
    _addPanelClasses(e) {
      this._pane &&
        ft(e).forEach((r) => {
          r !== "" &&
            this._appliedPanelClasses.indexOf(r) === -1 &&
            (this._appliedPanelClasses.push(r), this._pane.classList.add(r));
        });
    }
    _clearPanelClasses() {
      this._pane &&
        (this._appliedPanelClasses.forEach((e) => {
          this._pane.classList.remove(e);
        }),
        (this._appliedPanelClasses = []));
    }
    _getOriginRect() {
      let e = this._origin;
      if (e instanceof H) return e.nativeElement.getBoundingClientRect();
      if (e instanceof Element) return e.getBoundingClientRect();
      let r = e.width || 0,
        t = e.height || 0;
      return {
        top: e.y,
        bottom: e.y + t,
        left: e.x,
        right: e.x + r,
        height: t,
        width: r,
      };
    }
  };
function Ze(i, e) {
  for (let r in e) e.hasOwnProperty(r) && (i[r] = e[r]);
  return i;
}
function _a(i) {
  if (typeof i != "number" && i != null) {
    let [e, r] = i.split(Qd);
    return !r || r === "px" ? parseFloat(e) : null;
  }
  return i || null;
}
function ba(i) {
  return {
    top: Math.floor(i.top),
    right: Math.floor(i.right),
    bottom: Math.floor(i.bottom),
    left: Math.floor(i.left),
    width: Math.floor(i.width),
    height: Math.floor(i.height),
  };
}
function Jd(i, e) {
  return i === e
    ? !0
    : i.isOriginClipped === e.isOriginClipped &&
        i.isOriginOutsideView === e.isOriginOutsideView &&
        i.isOverlayClipped === e.isOverlayClipped &&
        i.isOverlayOutsideView === e.isOverlayOutsideView;
}
var ya = "cdk-global-overlay-wrapper",
  Xr = class {
    constructor() {
      (this._cssPosition = "static"),
        (this._topOffset = ""),
        (this._bottomOffset = ""),
        (this._alignItems = ""),
        (this._xPosition = ""),
        (this._xOffset = ""),
        (this._width = ""),
        (this._height = ""),
        (this._isDisposed = !1);
    }
    attach(e) {
      let r = e.getConfig();
      (this._overlayRef = e),
        this._width && !r.width && e.updateSize({ width: this._width }),
        this._height && !r.height && e.updateSize({ height: this._height }),
        e.hostElement.classList.add(ya),
        (this._isDisposed = !1);
    }
    top(e = "") {
      return (
        (this._bottomOffset = ""),
        (this._topOffset = e),
        (this._alignItems = "flex-start"),
        this
      );
    }
    left(e = "") {
      return (this._xOffset = e), (this._xPosition = "left"), this;
    }
    bottom(e = "") {
      return (
        (this._topOffset = ""),
        (this._bottomOffset = e),
        (this._alignItems = "flex-end"),
        this
      );
    }
    right(e = "") {
      return (this._xOffset = e), (this._xPosition = "right"), this;
    }
    start(e = "") {
      return (this._xOffset = e), (this._xPosition = "start"), this;
    }
    end(e = "") {
      return (this._xOffset = e), (this._xPosition = "end"), this;
    }
    width(e = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ width: e })
          : (this._width = e),
        this
      );
    }
    height(e = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ height: e })
          : (this._height = e),
        this
      );
    }
    centerHorizontally(e = "") {
      return this.left(e), (this._xPosition = "center"), this;
    }
    centerVertically(e = "") {
      return this.top(e), (this._alignItems = "center"), this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      let e = this._overlayRef.overlayElement.style,
        r = this._overlayRef.hostElement.style,
        t = this._overlayRef.getConfig(),
        { width: n, height: o, maxWidth: s, maxHeight: a } = t,
        c =
          (n === "100%" || n === "100vw") &&
          (!s || s === "100%" || s === "100vw"),
        l =
          (o === "100%" || o === "100vh") &&
          (!a || a === "100%" || a === "100vh"),
        d = this._xPosition,
        u = this._xOffset,
        b = this._overlayRef.getConfig().direction === "rtl",
        O = "",
        P = "",
        N = "";
      c
        ? (N = "flex-start")
        : d === "center"
        ? ((N = "center"), b ? (P = u) : (O = u))
        : b
        ? d === "left" || d === "end"
          ? ((N = "flex-end"), (O = u))
          : (d === "right" || d === "start") && ((N = "flex-start"), (P = u))
        : d === "left" || d === "start"
        ? ((N = "flex-start"), (O = u))
        : (d === "right" || d === "end") && ((N = "flex-end"), (P = u)),
        (e.position = this._cssPosition),
        (e.marginLeft = c ? "0" : O),
        (e.marginTop = l ? "0" : this._topOffset),
        (e.marginBottom = this._bottomOffset),
        (e.marginRight = c ? "0" : P),
        (r.justifyContent = N),
        (r.alignItems = l ? "flex-start" : this._alignItems);
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      let e = this._overlayRef.overlayElement.style,
        r = this._overlayRef.hostElement,
        t = r.style;
      r.classList.remove(ya),
        (t.justifyContent =
          t.alignItems =
          e.marginTop =
          e.marginBottom =
          e.marginLeft =
          e.marginRight =
          e.position =
            ""),
        (this._overlayRef = null),
        (this._isDisposed = !0);
    }
  },
  eh = (() => {
    let e = class e {
      constructor(t, n, o, s) {
        (this._viewportRuler = t),
          (this._document = n),
          (this._platform = o),
          (this._overlayContainer = s);
      }
      global() {
        return new Xr();
      }
      flexibleConnectedTo(t) {
        return new qr(
          t,
          this._viewportRuler,
          this._document,
          this._platform,
          this._overlayContainer
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(zr), h(D), h($), h(bt));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })(),
  th = 0,
  de = (() => {
    let e = class e {
      constructor(t, n, o, s, a, c, l, d, u, b, O, P) {
        (this.scrollStrategies = t),
          (this._overlayContainer = n),
          (this._componentFactoryResolver = o),
          (this._positionBuilder = s),
          (this._keyboardDispatcher = a),
          (this._injector = c),
          (this._ngZone = l),
          (this._document = d),
          (this._directionality = u),
          (this._location = b),
          (this._outsideClickDispatcher = O),
          (this._animationsModuleType = P);
      }
      create(t) {
        let n = this._createHostElement(),
          o = this._createPaneElement(n),
          s = this._createPortalOutlet(o),
          a = new fi(t);
        return (
          (a.direction = a.direction || this._directionality.value),
          new we(
            s,
            n,
            o,
            a,
            this._ngZone,
            this._keyboardDispatcher,
            this._document,
            this._location,
            this._outsideClickDispatcher,
            this._animationsModuleType === "NoopAnimations"
          )
        );
      }
      position() {
        return this._positionBuilder;
      }
      _createPaneElement(t) {
        let n = this._document.createElement("div");
        return (
          (n.id = `cdk-overlay-${th++}`),
          n.classList.add("cdk-overlay-pane"),
          t.appendChild(n),
          n
        );
      }
      _createHostElement() {
        let t = this._document.createElement("div");
        return this._overlayContainer.getContainerElement().appendChild(t), t;
      }
      _createPortalOutlet(t) {
        return (
          this._appRef || (this._appRef = this._injector.get(Ve)),
          new dn(
            t,
            this._componentFactoryResolver,
            this._appRef,
            this._injector,
            this._document
          )
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(
        h(qd),
        h(bt),
        h(Di),
        h(eh),
        h(Xd),
        h(K),
        h(S),
        h(D),
        h(hi),
        h(_e),
        h(Kd),
        h(De, 8)
      );
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })();
var ih = new M("cdk-connected-overlay-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    let i = v(de);
    return () => i.scrollStrategies.reposition();
  },
});
function nh(i) {
  return () => i.scrollStrategies.reposition();
}
var rh = { provide: ih, deps: [de], useFactory: nh },
  pn = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵmod = C({ type: e })),
      (e.ɵinj = w({ providers: [de, rh], imports: [Ae, Ge, Vr, Vr] }));
    let i = e;
    return i;
  })();
var oh = (() => {
  let e = class e {
    create(t) {
      return typeof MutationObserver > "u" ? null : new MutationObserver(t);
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let i = e;
  return i;
})();
var xa = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = C({ type: e })),
    (e.ɵinj = w({ providers: [oh] }));
  let i = e;
  return i;
})();
var Ea = new Set(),
  qe,
  sh = (() => {
    let e = class e {
      constructor(t, n) {
        (this._platform = t),
          (this._nonce = n),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : ch);
      }
      matchMedia(t) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && ah(t, this._nonce),
          this._matchMedia(t)
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h($), h(It, 8));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })();
function ah(i, e) {
  if (!Ea.has(i))
    try {
      qe ||
        ((qe = document.createElement("style")),
        e && qe.setAttribute("nonce", e),
        qe.setAttribute("type", "text/css"),
        document.head.appendChild(qe)),
        qe.sheet &&
          (qe.sheet.insertRule(`@media ${i} {body{ }}`, 0), Ea.add(i));
    } catch (r) {
      console.error(r);
    }
}
function ch(i) {
  return {
    matches: i === "all" || i === "",
    media: i,
    addListener: () => {},
    removeListener: () => {},
  };
}
var Da = (() => {
  let e = class e {
    constructor(t, n) {
      (this._mediaMatcher = t),
        (this._zone = n),
        (this._queries = new Map()),
        (this._destroySubject = new I());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(t) {
      return Oa(ft(t)).some((o) => this._registerQuery(o).mql.matches);
    }
    observe(t) {
      let o = Oa(ft(t)).map((a) => this._registerQuery(a).observable),
        s = Je(o);
      return (
        (s = yi(s.pipe(Y(1)), s.pipe(Ci(1), Dn(0)))),
        s.pipe(
          T((a) => {
            let c = { matches: !1, breakpoints: {} };
            return (
              a.forEach(({ matches: l, query: d }) => {
                (c.matches = c.matches || l), (c.breakpoints[d] = l);
              }),
              c
            );
          })
        )
      );
    }
    _registerQuery(t) {
      if (this._queries.has(t)) return this._queries.get(t);
      let n = this._mediaMatcher.matchMedia(t),
        s = {
          observable: new wt((a) => {
            let c = (l) => this._zone.run(() => a.next(l));
            return (
              n.addListener(c),
              () => {
                n.removeListener(c);
              }
            );
          }).pipe(
            fe(n),
            T(({ matches: a }) => ({ query: t, matches: a })),
            ge(this._destroySubject)
          ),
          mql: n,
        };
      return this._queries.set(t, s), s;
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h(sh), h(S));
  }),
    (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let i = e;
  return i;
})();
function Oa(i) {
  return i
    .map((e) => e.split(","))
    .reduce((e, r) => e.concat(r))
    .map((e) => e.trim());
}
var gi = (() => {
  let e = class e {
    constructor(t) {
      this._platform = t;
    }
    isDisabled(t) {
      return t.hasAttribute("disabled");
    }
    isVisible(t) {
      return dh(t) && getComputedStyle(t).visibility === "visible";
    }
    isTabbable(t) {
      if (!this._platform.isBrowser) return !1;
      let n = lh(_h(t));
      if (n && (Sa(n) === -1 || !this.isVisible(n))) return !1;
      let o = t.nodeName.toLowerCase(),
        s = Sa(t);
      return t.hasAttribute("contenteditable")
        ? s !== -1
        : o === "iframe" ||
          o === "object" ||
          (this._platform.WEBKIT && this._platform.IOS && !mh(t))
        ? !1
        : o === "audio"
        ? t.hasAttribute("controls")
          ? s !== -1
          : !1
        : o === "video"
        ? s === -1
          ? !1
          : s !== null
          ? !0
          : this._platform.FIREFOX || t.hasAttribute("controls")
        : t.tabIndex >= 0;
    }
    isFocusable(t, n) {
      return (
        vh(t) &&
        !this.isDisabled(t) &&
        (n?.ignoreVisibility || this.isVisible(t))
      );
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(h($));
  }),
    (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let i = e;
  return i;
})();
function lh(i) {
  try {
    return i.frameElement;
  } catch {
    return null;
  }
}
function dh(i) {
  return !!(
    i.offsetWidth ||
    i.offsetHeight ||
    (typeof i.getClientRects == "function" && i.getClientRects().length)
  );
}
function hh(i) {
  let e = i.nodeName.toLowerCase();
  return e === "input" || e === "select" || e === "button" || e === "textarea";
}
function uh(i) {
  return fh(i) && i.type == "hidden";
}
function ph(i) {
  return gh(i) && i.hasAttribute("href");
}
function fh(i) {
  return i.nodeName.toLowerCase() == "input";
}
function gh(i) {
  return i.nodeName.toLowerCase() == "a";
}
function Ia(i) {
  if (!i.hasAttribute("tabindex") || i.tabIndex === void 0) return !1;
  let e = i.getAttribute("tabindex");
  return !!(e && !isNaN(parseInt(e, 10)));
}
function Sa(i) {
  if (!Ia(i)) return null;
  let e = parseInt(i.getAttribute("tabindex") || "", 10);
  return isNaN(e) ? -1 : e;
}
function mh(i) {
  let e = i.nodeName.toLowerCase(),
    r = e === "input" && i.type;
  return r === "text" || r === "password" || e === "select" || e === "textarea";
}
function vh(i) {
  return uh(i)
    ? !1
    : hh(i) || ph(i) || i.hasAttribute("contenteditable") || Ia(i);
}
function _h(i) {
  return (i.ownerDocument && i.ownerDocument.defaultView) || window;
}
var Jr = class {
    get enabled() {
      return this._enabled;
    }
    set enabled(e) {
      (this._enabled = e),
        this._startAnchor &&
          this._endAnchor &&
          (this._toggleAnchorTabIndex(e, this._startAnchor),
          this._toggleAnchorTabIndex(e, this._endAnchor));
    }
    constructor(e, r, t, n, o = !1) {
      (this._element = e),
        (this._checker = r),
        (this._ngZone = t),
        (this._document = n),
        (this._hasAttached = !1),
        (this.startAnchorListener = () => this.focusLastTabbableElement()),
        (this.endAnchorListener = () => this.focusFirstTabbableElement()),
        (this._enabled = !0),
        o || this.attachAnchors();
    }
    destroy() {
      let e = this._startAnchor,
        r = this._endAnchor;
      e &&
        (e.removeEventListener("focus", this.startAnchorListener), e.remove()),
        r &&
          (r.removeEventListener("focus", this.endAnchorListener), r.remove()),
        (this._startAnchor = this._endAnchor = null),
        (this._hasAttached = !1);
    }
    attachAnchors() {
      return this._hasAttached
        ? !0
        : (this._ngZone.runOutsideAngular(() => {
            this._startAnchor ||
              ((this._startAnchor = this._createAnchor()),
              this._startAnchor.addEventListener(
                "focus",
                this.startAnchorListener
              )),
              this._endAnchor ||
                ((this._endAnchor = this._createAnchor()),
                this._endAnchor.addEventListener(
                  "focus",
                  this.endAnchorListener
                ));
          }),
          this._element.parentNode &&
            (this._element.parentNode.insertBefore(
              this._startAnchor,
              this._element
            ),
            this._element.parentNode.insertBefore(
              this._endAnchor,
              this._element.nextSibling
            ),
            (this._hasAttached = !0)),
          this._hasAttached);
    }
    focusInitialElementWhenReady(e) {
      return new Promise((r) => {
        this._executeOnStable(() => r(this.focusInitialElement(e)));
      });
    }
    focusFirstTabbableElementWhenReady(e) {
      return new Promise((r) => {
        this._executeOnStable(() => r(this.focusFirstTabbableElement(e)));
      });
    }
    focusLastTabbableElementWhenReady(e) {
      return new Promise((r) => {
        this._executeOnStable(() => r(this.focusLastTabbableElement(e)));
      });
    }
    _getRegionBoundary(e) {
      let r = this._element.querySelectorAll(
        `[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`
      );
      return e == "start"
        ? r.length
          ? r[0]
          : this._getFirstTabbableElement(this._element)
        : r.length
        ? r[r.length - 1]
        : this._getLastTabbableElement(this._element);
    }
    focusInitialElement(e) {
      let r = this._element.querySelector(
        "[cdk-focus-initial], [cdkFocusInitial]"
      );
      if (r) {
        if (!this._checker.isFocusable(r)) {
          let t = this._getFirstTabbableElement(r);
          return t?.focus(e), !!t;
        }
        return r.focus(e), !0;
      }
      return this.focusFirstTabbableElement(e);
    }
    focusFirstTabbableElement(e) {
      let r = this._getRegionBoundary("start");
      return r && r.focus(e), !!r;
    }
    focusLastTabbableElement(e) {
      let r = this._getRegionBoundary("end");
      return r && r.focus(e), !!r;
    }
    hasAttached() {
      return this._hasAttached;
    }
    _getFirstTabbableElement(e) {
      if (this._checker.isFocusable(e) && this._checker.isTabbable(e)) return e;
      let r = e.children;
      for (let t = 0; t < r.length; t++) {
        let n =
          r[t].nodeType === this._document.ELEMENT_NODE
            ? this._getFirstTabbableElement(r[t])
            : null;
        if (n) return n;
      }
      return null;
    }
    _getLastTabbableElement(e) {
      if (this._checker.isFocusable(e) && this._checker.isTabbable(e)) return e;
      let r = e.children;
      for (let t = r.length - 1; t >= 0; t--) {
        let n =
          r[t].nodeType === this._document.ELEMENT_NODE
            ? this._getLastTabbableElement(r[t])
            : null;
        if (n) return n;
      }
      return null;
    }
    _createAnchor() {
      let e = this._document.createElement("div");
      return (
        this._toggleAnchorTabIndex(this._enabled, e),
        e.classList.add("cdk-visually-hidden"),
        e.classList.add("cdk-focus-trap-anchor"),
        e.setAttribute("aria-hidden", "true"),
        e
      );
    }
    _toggleAnchorTabIndex(e, r) {
      e ? r.setAttribute("tabindex", "0") : r.removeAttribute("tabindex");
    }
    toggleAnchors(e) {
      this._startAnchor &&
        this._endAnchor &&
        (this._toggleAnchorTabIndex(e, this._startAnchor),
        this._toggleAnchorTabIndex(e, this._endAnchor));
    }
    _executeOnStable(e) {
      this._ngZone.isStable
        ? e()
        : this._ngZone.onStable.pipe(Y(1)).subscribe(e);
    }
  },
  mn = (() => {
    let e = class e {
      constructor(t, n, o) {
        (this._checker = t), (this._ngZone = n), (this._document = o);
      }
      create(t, n = !1) {
        return new Jr(t, this._checker, this._ngZone, this._document, n);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(gi), h(S), h(D));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })();
function eo(i) {
  return i.buttons === 0 || i.detail === 0;
}
function to(i) {
  let e =
    (i.touches && i.touches[0]) || (i.changedTouches && i.changedTouches[0]);
  return (
    !!e &&
    e.identifier === -1 &&
    (e.radiusX == null || e.radiusX === 1) &&
    (e.radiusY == null || e.radiusY === 1)
  );
}
var bh = new M("cdk-input-modality-detector-options"),
  yh = { ignoreKeys: [18, 17, 224, 91, 16] },
  ka = 650,
  yt = gt({ passive: !0, capture: !0 }),
  wh = (() => {
    let e = class e {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(t, n, o, s) {
        (this._platform = t),
          (this._mostRecentTarget = null),
          (this._modality = new W(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (a) => {
            this._options?.ignoreKeys?.some((c) => c === a.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = le(a)));
          }),
          (this._onMousedown = (a) => {
            Date.now() - this._lastTouchMs < ka ||
              (this._modality.next(eo(a) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = le(a)));
          }),
          (this._onTouchstart = (a) => {
            if (to(a)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = le(a));
          }),
          (this._options = g(g({}, yh), s)),
          (this.modalityDetected = this._modality.pipe(Ci(1))),
          (this.modalityChanged = this.modalityDetected.pipe(Mn())),
          t.isBrowser &&
            n.runOutsideAngular(() => {
              o.addEventListener("keydown", this._onKeydown, yt),
                o.addEventListener("mousedown", this._onMousedown, yt),
                o.addEventListener("touchstart", this._onTouchstart, yt);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, yt),
            document.removeEventListener("mousedown", this._onMousedown, yt),
            document.removeEventListener("touchstart", this._onTouchstart, yt));
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h($), h(S), h(D), h(bh, 8));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })();
var gn = (function (i) {
    return (
      (i[(i.IMMEDIATE = 0)] = "IMMEDIATE"),
      (i[(i.EVENTUAL = 1)] = "EVENTUAL"),
      i
    );
  })(gn || {}),
  Ch = new M("cdk-focus-monitor-default-options"),
  fn = gt({ passive: !0, capture: !0 }),
  vn = (() => {
    let e = class e {
      constructor(t, n, o, s, a) {
        (this._ngZone = t),
          (this._platform = n),
          (this._inputModalityDetector = o),
          (this._origin = null),
          (this._windowFocused = !1),
          (this._originFromTouchInteraction = !1),
          (this._elementInfo = new Map()),
          (this._monitoredElementCount = 0),
          (this._rootNodeFocusListenerCount = new Map()),
          (this._windowFocusListener = () => {
            (this._windowFocused = !0),
              (this._windowFocusTimeoutId = window.setTimeout(
                () => (this._windowFocused = !1)
              ));
          }),
          (this._stopInputModalityDetector = new I()),
          (this._rootNodeFocusAndBlurListener = (c) => {
            let l = le(c);
            for (let d = l; d; d = d.parentElement)
              c.type === "focus" ? this._onFocus(c, d) : this._onBlur(c, d);
          }),
          (this._document = s),
          (this._detectionMode = a?.detectionMode || gn.IMMEDIATE);
      }
      monitor(t, n = !1) {
        let o = ye(t);
        if (!this._platform.isBrowser || o.nodeType !== 1) return y();
        let s = ua(o) || this._getDocument(),
          a = this._elementInfo.get(o);
        if (a) return n && (a.checkChildren = !0), a.subject;
        let c = { checkChildren: n, subject: new I(), rootNode: s };
        return (
          this._elementInfo.set(o, c),
          this._registerGlobalListeners(c),
          c.subject
        );
      }
      stopMonitoring(t) {
        let n = ye(t),
          o = this._elementInfo.get(n);
        o &&
          (o.subject.complete(),
          this._setClasses(n),
          this._elementInfo.delete(n),
          this._removeGlobalListeners(o));
      }
      focusVia(t, n, o) {
        let s = ye(t),
          a = this._getDocument().activeElement;
        s === a
          ? this._getClosestElementsInfo(s).forEach(([c, l]) =>
              this._originChanged(c, n, l)
            )
          : (this._setOrigin(n), typeof s.focus == "function" && s.focus(o));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((t, n) => this.stopMonitoring(n));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(t) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(t)
              ? "touch"
              : "program"
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
          ? this._lastFocusOrigin
          : t && this._isLastInteractionFromInputLabel(t)
          ? "mouse"
          : "program";
      }
      _shouldBeAttributedToTouch(t) {
        return (
          this._detectionMode === gn.EVENTUAL ||
          !!t?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(t, n) {
        t.classList.toggle("cdk-focused", !!n),
          t.classList.toggle("cdk-touch-focused", n === "touch"),
          t.classList.toggle("cdk-keyboard-focused", n === "keyboard"),
          t.classList.toggle("cdk-mouse-focused", n === "mouse"),
          t.classList.toggle("cdk-program-focused", n === "program");
      }
      _setOrigin(t, n = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = t),
            (this._originFromTouchInteraction = t === "touch" && n),
            this._detectionMode === gn.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let o = this._originFromTouchInteraction ? ka : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), o);
          }
        });
      }
      _onFocus(t, n) {
        let o = this._elementInfo.get(n),
          s = le(t);
        !o ||
          (!o.checkChildren && n !== s) ||
          this._originChanged(n, this._getFocusOrigin(s), o);
      }
      _onBlur(t, n) {
        let o = this._elementInfo.get(n);
        !o ||
          (o.checkChildren &&
            t.relatedTarget instanceof Node &&
            n.contains(t.relatedTarget)) ||
          (this._setClasses(n), this._emitOrigin(o, null));
      }
      _emitOrigin(t, n) {
        t.subject.observers.length && this._ngZone.run(() => t.subject.next(n));
      }
      _registerGlobalListeners(t) {
        if (!this._platform.isBrowser) return;
        let n = t.rootNode,
          o = this._rootNodeFocusListenerCount.get(n) || 0;
        o ||
          this._ngZone.runOutsideAngular(() => {
            n.addEventListener("focus", this._rootNodeFocusAndBlurListener, fn),
              n.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                fn
              );
          }),
          this._rootNodeFocusListenerCount.set(n, o + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                "focus",
                this._windowFocusListener
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(ge(this._stopInputModalityDetector))
              .subscribe((s) => {
                this._setOrigin(s, !0);
              }));
      }
      _removeGlobalListeners(t) {
        let n = t.rootNode;
        if (this._rootNodeFocusListenerCount.has(n)) {
          let o = this._rootNodeFocusListenerCount.get(n);
          o > 1
            ? this._rootNodeFocusListenerCount.set(n, o - 1)
            : (n.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                fn
              ),
              n.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                fn
              ),
              this._rootNodeFocusListenerCount.delete(n));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            "focus",
            this._windowFocusListener
          ),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(t, n, o) {
        this._setClasses(t, n),
          this._emitOrigin(o, n),
          (this._lastFocusOrigin = n);
      }
      _getClosestElementsInfo(t) {
        let n = [];
        return (
          this._elementInfo.forEach((o, s) => {
            (s === t || (o.checkChildren && s.contains(t))) && n.push([s, o]);
          }),
          n
        );
      }
      _isLastInteractionFromInputLabel(t) {
        let { _mostRecentTarget: n, mostRecentModality: o } =
          this._inputModalityDetector;
        if (
          o !== "mouse" ||
          !n ||
          n === t ||
          (t.nodeName !== "INPUT" && t.nodeName !== "TEXTAREA") ||
          t.disabled
        )
          return !1;
        let s = t.labels;
        if (s) {
          for (let a = 0; a < s.length; a++) if (s[a].contains(n)) return !0;
        }
        return !1;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(S), h($), h(wh), h(D, 8), h(Ch, 8));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })();
var Xe = (function (i) {
    return (
      (i[(i.NONE = 0)] = "NONE"),
      (i[(i.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (i[(i.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      i
    );
  })(Xe || {}),
  Ma = "cdk-high-contrast-black-on-white",
  Ra = "cdk-high-contrast-white-on-black",
  Qr = "cdk-high-contrast-active",
  io = (() => {
    let e = class e {
      constructor(t, n) {
        (this._platform = t),
          (this._document = n),
          (this._breakpointSubscription = v(Da)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return Xe.NONE;
        let t = this._document.createElement("div");
        (t.style.backgroundColor = "rgb(1,2,3)"),
          (t.style.position = "absolute"),
          this._document.body.appendChild(t);
        let n = this._document.defaultView || window,
          o = n && n.getComputedStyle ? n.getComputedStyle(t) : null,
          s = ((o && o.backgroundColor) || "").replace(/ /g, "");
        switch ((t.remove(), s)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return Xe.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return Xe.BLACK_ON_WHITE;
        }
        return Xe.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let t = this._document.body.classList;
          t.remove(Qr, Ma, Ra), (this._hasCheckedHighContrastMode = !0);
          let n = this.getHighContrastMode();
          n === Xe.BLACK_ON_WHITE
            ? t.add(Qr, Ma)
            : n === Xe.WHITE_ON_BLACK && t.add(Qr, Ra);
        }
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h($), h(D));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })(),
  Ta = (() => {
    let e = class e {
      constructor(t) {
        t._applyBodyHighContrastModeCssClasses();
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(io));
    }),
      (e.ɵmod = C({ type: e })),
      (e.ɵinj = w({ imports: [xa] }));
    let i = e;
    return i;
  })();
function xh(i, e) {}
var Ke = class {
  constructor() {
    (this.role = "dialog"),
      (this.panelClass = ""),
      (this.hasBackdrop = !0),
      (this.backdropClass = ""),
      (this.disableClose = !1),
      (this.width = ""),
      (this.height = ""),
      (this.data = null),
      (this.ariaDescribedBy = null),
      (this.ariaLabelledBy = null),
      (this.ariaLabel = null),
      (this.ariaModal = !0),
      (this.autoFocus = "first-tabbable"),
      (this.restoreFocus = !0),
      (this.closeOnNavigation = !0),
      (this.closeOnDestroy = !0),
      (this.closeOnOverlayDetachments = !0);
  }
};
var so = (() => {
    let e = class e extends _t {
      constructor(t, n, o, s, a, c, l, d) {
        super(),
          (this._elementRef = t),
          (this._focusTrapFactory = n),
          (this._config = s),
          (this._interactivityChecker = a),
          (this._ngZone = c),
          (this._overlayRef = l),
          (this._focusMonitor = d),
          (this._platform = v($)),
          (this._focusTrap = null),
          (this._elementFocusedBeforeDialogWasOpened = null),
          (this._closeInteractionType = null),
          (this._ariaLabelledByQueue = []),
          (this._changeDetectorRef = v($e)),
          (this.attachDomPortal = (u) => {
            this._portalOutlet.hasAttached();
            let b = this._portalOutlet.attachDomPortal(u);
            return this._contentAttached(), b;
          }),
          (this._document = o),
          this._config.ariaLabelledBy &&
            this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
      }
      _addAriaLabelledBy(t) {
        this._ariaLabelledByQueue.push(t),
          this._changeDetectorRef.markForCheck();
      }
      _removeAriaLabelledBy(t) {
        let n = this._ariaLabelledByQueue.indexOf(t);
        n > -1 &&
          (this._ariaLabelledByQueue.splice(n, 1),
          this._changeDetectorRef.markForCheck());
      }
      _contentAttached() {
        this._initializeFocusTrap(),
          this._handleBackdropClicks(),
          this._captureInitialFocus();
      }
      _captureInitialFocus() {
        this._trapFocus();
      }
      ngOnDestroy() {
        this._restoreFocus();
      }
      attachComponentPortal(t) {
        this._portalOutlet.hasAttached();
        let n = this._portalOutlet.attachComponentPortal(t);
        return this._contentAttached(), n;
      }
      attachTemplatePortal(t) {
        this._portalOutlet.hasAttached();
        let n = this._portalOutlet.attachTemplatePortal(t);
        return this._contentAttached(), n;
      }
      _recaptureFocus() {
        this._containsFocus() || this._trapFocus();
      }
      _forceFocus(t, n) {
        this._interactivityChecker.isFocusable(t) ||
          ((t.tabIndex = -1),
          this._ngZone.runOutsideAngular(() => {
            let o = () => {
              t.removeEventListener("blur", o),
                t.removeEventListener("mousedown", o),
                t.removeAttribute("tabindex");
            };
            t.addEventListener("blur", o), t.addEventListener("mousedown", o);
          })),
          t.focus(n);
      }
      _focusByCssSelector(t, n) {
        let o = this._elementRef.nativeElement.querySelector(t);
        o && this._forceFocus(o, n);
      }
      _trapFocus() {
        let t = this._elementRef.nativeElement;
        switch (this._config.autoFocus) {
          case !1:
          case "dialog":
            this._containsFocus() || t.focus();
            break;
          case !0:
          case "first-tabbable":
            this._focusTrap?.focusInitialElementWhenReady().then((n) => {
              n || this._focusDialogContainer();
            });
            break;
          case "first-heading":
            this._focusByCssSelector(
              'h1, h2, h3, h4, h5, h6, [role="heading"]'
            );
            break;
          default:
            this._focusByCssSelector(this._config.autoFocus);
            break;
        }
      }
      _restoreFocus() {
        let t = this._config.restoreFocus,
          n = null;
        if (
          (typeof t == "string"
            ? (n = this._document.querySelector(t))
            : typeof t == "boolean"
            ? (n = t ? this._elementFocusedBeforeDialogWasOpened : null)
            : t && (n = t),
          this._config.restoreFocus && n && typeof n.focus == "function")
        ) {
          let o = li(),
            s = this._elementRef.nativeElement;
          (!o || o === this._document.body || o === s || s.contains(o)) &&
            (this._focusMonitor
              ? (this._focusMonitor.focusVia(n, this._closeInteractionType),
                (this._closeInteractionType = null))
              : n.focus());
        }
        this._focusTrap && this._focusTrap.destroy();
      }
      _focusDialogContainer() {
        this._elementRef.nativeElement.focus &&
          this._elementRef.nativeElement.focus();
      }
      _containsFocus() {
        let t = this._elementRef.nativeElement,
          n = li();
        return t === n || t.contains(n);
      }
      _initializeFocusTrap() {
        this._platform.isBrowser &&
          ((this._focusTrap = this._focusTrapFactory.create(
            this._elementRef.nativeElement
          )),
          this._document && (this._elementFocusedBeforeDialogWasOpened = li()));
      }
      _handleBackdropClicks() {
        this._overlayRef.backdropClick().subscribe(() => {
          this._config.disableClose && this._recaptureFocus();
        });
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(
        x(H),
        x(mn),
        x(D, 8),
        x(Ke),
        x(gi),
        x(S),
        x(we),
        x(vn)
      );
    }),
      (e.ɵcmp = j({
        type: e,
        selectors: [["cdk-dialog-container"]],
        viewQuery: function (n, o) {
          if ((n & 1 && Ii(pi, 7), n & 2)) {
            let s;
            At((s = Pt())) && (o._portalOutlet = s.first);
          }
        },
        hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
        hostVars: 6,
        hostBindings: function (n, o) {
          n & 2 &&
            Be("id", o._config.id || null)("role", o._config.role)(
              "aria-modal",
              o._config.ariaModal
            )(
              "aria-labelledby",
              o._config.ariaLabel ? null : o._ariaLabelledByQueue[0]
            )("aria-label", o._config.ariaLabel)(
              "aria-describedby",
              o._config.ariaDescribedBy || null
            );
        },
        standalone: !0,
        features: [Le, Me],
        decls: 1,
        vars: 0,
        consts: [["cdkPortalOutlet", ""]],
        template: function (n, o) {
          n & 1 && Ue(0, xh, 0, 0, "ng-template", 0);
        },
        dependencies: [pi],
        styles: [
          ".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}",
        ],
        encapsulation: 2,
      }));
    let i = e;
    return i;
  })(),
  mi = class {
    constructor(e, r) {
      (this.overlayRef = e),
        (this.config = r),
        (this.closed = new I()),
        (this.disableClose = r.disableClose),
        (this.backdropClick = e.backdropClick()),
        (this.keydownEvents = e.keydownEvents()),
        (this.outsidePointerEvents = e.outsidePointerEvents()),
        (this.id = r.id),
        this.keydownEvents.subscribe((t) => {
          t.keyCode === 27 &&
            !this.disableClose &&
            !hn(t) &&
            (t.preventDefault(),
            this.close(void 0, { focusOrigin: "keyboard" }));
        }),
        this.backdropClick.subscribe(() => {
          this.disableClose || this.close(void 0, { focusOrigin: "mouse" });
        }),
        (this._detachSubscription = e.detachments().subscribe(() => {
          r.closeOnOverlayDetachments !== !1 && this.close();
        }));
    }
    close(e, r) {
      if (this.containerInstance) {
        let t = this.closed;
        (this.containerInstance._closeInteractionType =
          r?.focusOrigin || "program"),
          this._detachSubscription.unsubscribe(),
          this.overlayRef.dispose(),
          t.next(e),
          t.complete(),
          (this.componentInstance = this.containerInstance = null);
      }
    }
    updatePosition() {
      return this.overlayRef.updatePosition(), this;
    }
    updateSize(e = "", r = "") {
      return this.overlayRef.updateSize({ width: e, height: r }), this;
    }
    addPanelClass(e) {
      return this.overlayRef.addPanelClass(e), this;
    }
    removePanelClass(e) {
      return this.overlayRef.removePanelClass(e), this;
    }
  },
  Eh = new M("DialogScrollStrategy", {
    providedIn: "root",
    factory: () => {
      let i = v(de);
      return () => i.scrollStrategies.block();
    },
  }),
  Oh = new M("DialogData"),
  Dh = new M("DefaultDialogConfig");
var Sh = 0,
  ao = (() => {
    let e = class e {
      get openDialogs() {
        return this._parentDialog
          ? this._parentDialog.openDialogs
          : this._openDialogsAtThisLevel;
      }
      get afterOpened() {
        return this._parentDialog
          ? this._parentDialog.afterOpened
          : this._afterOpenedAtThisLevel;
      }
      constructor(t, n, o, s, a, c) {
        (this._overlay = t),
          (this._injector = n),
          (this._defaultOptions = o),
          (this._parentDialog = s),
          (this._overlayContainer = a),
          (this._openDialogsAtThisLevel = []),
          (this._afterAllClosedAtThisLevel = new I()),
          (this._afterOpenedAtThisLevel = new I()),
          (this._ariaHiddenElements = new Map()),
          (this.afterAllClosed = Fe(() =>
            this.openDialogs.length
              ? this._getAfterAllClosed()
              : this._getAfterAllClosed().pipe(fe(void 0))
          )),
          (this._scrollStrategy = c);
      }
      open(t, n) {
        let o = this._defaultOptions || new Ke();
        (n = g(g({}, o), n)),
          (n.id = n.id || `cdk-dialog-${Sh++}`),
          n.id && this.getDialogById(n.id);
        let s = this._getOverlayConfig(n),
          a = this._overlay.create(s),
          c = new mi(a, n),
          l = this._attachContainer(a, c, n);
        return (
          (c.containerInstance = l),
          this._attachDialogContent(t, c, l, n),
          this.openDialogs.length ||
            this._hideNonDialogContentFromAssistiveTechnology(),
          this.openDialogs.push(c),
          c.closed.subscribe(() => this._removeOpenDialog(c, !0)),
          this.afterOpened.next(c),
          c
        );
      }
      closeAll() {
        ro(this.openDialogs, (t) => t.close());
      }
      getDialogById(t) {
        return this.openDialogs.find((n) => n.id === t);
      }
      ngOnDestroy() {
        ro(this._openDialogsAtThisLevel, (t) => {
          t.config.closeOnDestroy === !1 && this._removeOpenDialog(t, !1);
        }),
          ro(this._openDialogsAtThisLevel, (t) => t.close()),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete(),
          (this._openDialogsAtThisLevel = []);
      }
      _getOverlayConfig(t) {
        let n = new fi({
          positionStrategy:
            t.positionStrategy ||
            this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically(),
          scrollStrategy: t.scrollStrategy || this._scrollStrategy(),
          panelClass: t.panelClass,
          hasBackdrop: t.hasBackdrop,
          direction: t.direction,
          minWidth: t.minWidth,
          minHeight: t.minHeight,
          maxWidth: t.maxWidth,
          maxHeight: t.maxHeight,
          width: t.width,
          height: t.height,
          disposeOnNavigation: t.closeOnNavigation,
        });
        return t.backdropClass && (n.backdropClass = t.backdropClass), n;
      }
      _attachContainer(t, n, o) {
        let s = o.injector || o.viewContainerRef?.injector,
          a = [
            { provide: Ke, useValue: o },
            { provide: mi, useValue: n },
            { provide: we, useValue: t },
          ],
          c;
        o.container
          ? typeof o.container == "function"
            ? (c = o.container)
            : ((c = o.container.type), a.push(...o.container.providers(o)))
          : (c = so);
        let l = new mt(
          c,
          o.viewContainerRef,
          K.create({ parent: s || this._injector, providers: a }),
          o.componentFactoryResolver
        );
        return t.attach(l).instance;
      }
      _attachDialogContent(t, n, o, s) {
        if (t instanceof Tt) {
          let a = this._createInjector(s, n, o, void 0),
            c = { $implicit: s.data, dialogRef: n };
          s.templateContext &&
            (c = g(
              g({}, c),
              typeof s.templateContext == "function"
                ? s.templateContext()
                : s.templateContext
            )),
            o.attachTemplatePortal(new vt(t, null, c, a));
        } else {
          let a = this._createInjector(s, n, o, this._injector),
            c = o.attachComponentPortal(
              new mt(t, s.viewContainerRef, a, s.componentFactoryResolver)
            );
          (n.componentRef = c), (n.componentInstance = c.instance);
        }
      }
      _createInjector(t, n, o, s) {
        let a = t.injector || t.viewContainerRef?.injector,
          c = [
            { provide: Oh, useValue: t.data },
            { provide: mi, useValue: n },
          ];
        return (
          t.providers &&
            (typeof t.providers == "function"
              ? c.push(...t.providers(n, t, o))
              : c.push(...t.providers)),
          t.direction &&
            (!a || !a.get(hi, null, { optional: !0 })) &&
            c.push({
              provide: hi,
              useValue: { value: t.direction, change: y() },
            }),
          K.create({ parent: a || s, providers: c })
        );
      }
      _removeOpenDialog(t, n) {
        let o = this.openDialogs.indexOf(t);
        o > -1 &&
          (this.openDialogs.splice(o, 1),
          this.openDialogs.length ||
            (this._ariaHiddenElements.forEach((s, a) => {
              s
                ? a.setAttribute("aria-hidden", s)
                : a.removeAttribute("aria-hidden");
            }),
            this._ariaHiddenElements.clear(),
            n && this._getAfterAllClosed().next()));
      }
      _hideNonDialogContentFromAssistiveTechnology() {
        let t = this._overlayContainer.getContainerElement();
        if (t.parentElement) {
          let n = t.parentElement.children;
          for (let o = n.length - 1; o > -1; o--) {
            let s = n[o];
            s !== t &&
              s.nodeName !== "SCRIPT" &&
              s.nodeName !== "STYLE" &&
              !s.hasAttribute("aria-live") &&
              (this._ariaHiddenElements.set(s, s.getAttribute("aria-hidden")),
              s.setAttribute("aria-hidden", "true"));
          }
        }
      }
      _getAfterAllClosed() {
        let t = this._parentDialog;
        return t ? t._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(de), h(K), h(Dh, 8), h(e, 12), h(bt), h(Eh));
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })();
function ro(i, e) {
  let r = i.length;
  for (; r--; ) e(i[r]);
}
var Aa = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = C({ type: e })),
    (e.ɵinj = w({ providers: [ao], imports: [pn, Ge, Ta, Ge] }));
  let i = e;
  return i;
})();
function Mh() {
  return !0;
}
var Rh = new M("mat-sanity-checks", { providedIn: "root", factory: Mh }),
  ho = (() => {
    let e = class e {
      constructor(t, n, o) {
        (this._sanityChecks = n),
          (this._document = o),
          (this._hasDoneGlobalChecks = !1),
          t._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(t) {
        return di()
          ? !1
          : typeof this._sanityChecks == "boolean"
          ? this._sanityChecks
          : !!this._sanityChecks[t];
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(h(io), h(Rh, 8), h(D));
    }),
      (e.ɵmod = C({ type: e })),
      (e.ɵinj = w({ imports: [Ae, Ae] }));
    let i = e;
    return i;
  })();
var se = (function (i) {
    return (
      (i[(i.FADING_IN = 0)] = "FADING_IN"),
      (i[(i.VISIBLE = 1)] = "VISIBLE"),
      (i[(i.FADING_OUT = 2)] = "FADING_OUT"),
      (i[(i.HIDDEN = 3)] = "HIDDEN"),
      i
    );
  })(se || {}),
  co = class {
    constructor(e, r, t, n = !1) {
      (this._renderer = e),
        (this.element = r),
        (this.config = t),
        (this._animationForciblyDisabledThroughCss = n),
        (this.state = se.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  Pa = gt({ passive: !0, capture: !0 }),
  lo = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (e) => {
          let r = le(e);
          r &&
            this._events.get(e.type)?.forEach((t, n) => {
              (n === r || n.contains(r)) && t.forEach((o) => o.handleEvent(e));
            });
        });
    }
    addHandler(e, r, t, n) {
      let o = this._events.get(r);
      if (o) {
        let s = o.get(t);
        s ? s.add(n) : o.set(t, new Set([n]));
      } else
        this._events.set(r, new Map([[t, new Set([n])]])),
          e.runOutsideAngular(() => {
            document.addEventListener(r, this._delegateEventHandler, Pa);
          });
    }
    removeHandler(e, r, t) {
      let n = this._events.get(e);
      if (!n) return;
      let o = n.get(r);
      o &&
        (o.delete(t),
        o.size === 0 && n.delete(r),
        n.size === 0 &&
          (this._events.delete(e),
          document.removeEventListener(e, this._delegateEventHandler, Pa)));
    }
  },
  Na = { enterDuration: 225, exitDuration: 150 },
  Ih = 800,
  Fa = gt({ passive: !0, capture: !0 }),
  ja = ["mousedown", "touchstart"],
  La = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  vi = class vi {
    constructor(e, r, t, n) {
      (this._target = e),
        (this._ngZone = r),
        (this._platform = n),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        n.isBrowser && (this._containerElement = ye(t));
    }
    fadeInRipple(e, r, t = {}) {
      let n = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        o = g(g({}, Na), t.animation);
      t.centered && ((e = n.left + n.width / 2), (r = n.top + n.height / 2));
      let s = t.radius || kh(e, r, n),
        a = e - n.left,
        c = r - n.top,
        l = o.enterDuration,
        d = document.createElement("div");
      d.classList.add("mat-ripple-element"),
        (d.style.left = `${a - s}px`),
        (d.style.top = `${c - s}px`),
        (d.style.height = `${s * 2}px`),
        (d.style.width = `${s * 2}px`),
        t.color != null && (d.style.backgroundColor = t.color),
        (d.style.transitionDuration = `${l}ms`),
        this._containerElement.appendChild(d);
      let u = window.getComputedStyle(d),
        b = u.transitionProperty,
        O = u.transitionDuration,
        P =
          b === "none" ||
          O === "0s" ||
          O === "0s, 0s" ||
          (n.width === 0 && n.height === 0),
        N = new co(this, d, t, P);
      (d.style.transform = "scale3d(1, 1, 1)"),
        (N.state = se.FADING_IN),
        t.persistent || (this._mostRecentTransientRipple = N);
      let ae = null;
      return (
        !P &&
          (l || o.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let q = () => this._finishRippleTransition(N),
              Qe = () => this._destroyRipple(N);
            d.addEventListener("transitionend", q),
              d.addEventListener("transitioncancel", Qe),
              (ae = { onTransitionEnd: q, onTransitionCancel: Qe });
          }),
        this._activeRipples.set(N, ae),
        (P || !l) && this._finishRippleTransition(N),
        N
      );
    }
    fadeOutRipple(e) {
      if (e.state === se.FADING_OUT || e.state === se.HIDDEN) return;
      let r = e.element,
        t = g(g({}, Na), e.config.animation);
      (r.style.transitionDuration = `${t.exitDuration}ms`),
        (r.style.opacity = "0"),
        (e.state = se.FADING_OUT),
        (e._animationForciblyDisabledThroughCss || !t.exitDuration) &&
          this._finishRippleTransition(e);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((e) => e.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((e) => {
        e.config.persistent || e.fadeOut();
      });
    }
    setupTriggerEvents(e) {
      let r = ye(e);
      !this._platform.isBrowser ||
        !r ||
        r === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = r),
        ja.forEach((t) => {
          vi._eventManager.addHandler(this._ngZone, t, r, this);
        }));
    }
    handleEvent(e) {
      e.type === "mousedown"
        ? this._onMousedown(e)
        : e.type === "touchstart"
        ? this._onTouchStart(e)
        : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            La.forEach((r) => {
              this._triggerElement.addEventListener(r, this, Fa);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(e) {
      e.state === se.FADING_IN
        ? this._startFadeOutTransition(e)
        : e.state === se.FADING_OUT && this._destroyRipple(e);
    }
    _startFadeOutTransition(e) {
      let r = e === this._mostRecentTransientRipple,
        { persistent: t } = e.config;
      (e.state = se.VISIBLE), !t && (!r || !this._isPointerDown) && e.fadeOut();
    }
    _destroyRipple(e) {
      let r = this._activeRipples.get(e) ?? null;
      this._activeRipples.delete(e),
        this._activeRipples.size || (this._containerRect = null),
        e === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (e.state = se.HIDDEN),
        r !== null &&
          (e.element.removeEventListener("transitionend", r.onTransitionEnd),
          e.element.removeEventListener(
            "transitioncancel",
            r.onTransitionCancel
          )),
        e.element.remove();
    }
    _onMousedown(e) {
      let r = eo(e),
        t =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + Ih;
      !this._target.rippleDisabled &&
        !r &&
        !t &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(e.clientX, e.clientY, this._target.rippleConfig));
    }
    _onTouchStart(e) {
      if (!this._target.rippleDisabled && !to(e)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let r = e.changedTouches;
        if (r)
          for (let t = 0; t < r.length; t++)
            this.fadeInRipple(
              r[t].clientX,
              r[t].clientY,
              this._target.rippleConfig
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((e) => {
          let r =
            e.state === se.VISIBLE ||
            (e.config.terminateOnPointerUp && e.state === se.FADING_IN);
          !e.config.persistent && r && e.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let e = this._triggerElement;
      e &&
        (ja.forEach((r) => vi._eventManager.removeHandler(r, e, this)),
        this._pointerUpEventsRegistered &&
          La.forEach((r) => e.removeEventListener(r, this, Fa)));
    }
  };
vi._eventManager = new lo();
var Ua = vi;
function kh(i, e, r) {
  let t = Math.max(Math.abs(i - r.left), Math.abs(i - r.right)),
    n = Math.max(Math.abs(e - r.top), Math.abs(e - r.bottom));
  return Math.sqrt(t * t + n * n);
}
function Th(i, e) {}
var _i = class {
    constructor() {
      (this.role = "dialog"),
        (this.panelClass = ""),
        (this.hasBackdrop = !0),
        (this.backdropClass = ""),
        (this.disableClose = !1),
        (this.width = ""),
        (this.height = ""),
        (this.data = null),
        (this.ariaDescribedBy = null),
        (this.ariaLabelledBy = null),
        (this.ariaLabel = null),
        (this.ariaModal = !0),
        (this.autoFocus = "first-tabbable"),
        (this.restoreFocus = !0),
        (this.delayFocusTrap = !0),
        (this.closeOnNavigation = !0);
    }
  },
  uo = "mdc-dialog--open",
  Ba = "mdc-dialog--opening",
  za = "mdc-dialog--closing",
  Ah = 150,
  Ph = 75,
  Nh = (() => {
    let e = class e extends so {
      constructor(t, n, o, s, a, c, l, d, u) {
        super(t, n, o, s, a, c, l, u),
          (this._animationMode = d),
          (this._animationStateChanged = new Q()),
          (this._animationsEnabled = this._animationMode !== "NoopAnimations"),
          (this._actionSectionCount = 0),
          (this._hostElement = this._elementRef.nativeElement),
          (this._enterAnimationDuration = this._animationsEnabled
            ? $a(this._config.enterAnimationDuration) ?? Ah
            : 0),
          (this._exitAnimationDuration = this._animationsEnabled
            ? $a(this._config.exitAnimationDuration) ?? Ph
            : 0),
          (this._animationTimer = null),
          (this._finishDialogOpen = () => {
            this._clearAnimationClasses(),
              this._openAnimationDone(this._enterAnimationDuration);
          }),
          (this._finishDialogClose = () => {
            this._clearAnimationClasses(),
              this._animationStateChanged.emit({
                state: "closed",
                totalTime: this._exitAnimationDuration,
              });
          });
      }
      _contentAttached() {
        super._contentAttached(), this._startOpenAnimation();
      }
      _startOpenAnimation() {
        this._animationStateChanged.emit({
          state: "opening",
          totalTime: this._enterAnimationDuration,
        }),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(
                Va,
                `${this._enterAnimationDuration}ms`
              ),
              this._requestAnimationFrame(() =>
                this._hostElement.classList.add(Ba, uo)
              ),
              this._waitForAnimationToComplete(
                this._enterAnimationDuration,
                this._finishDialogOpen
              ))
            : (this._hostElement.classList.add(uo),
              Promise.resolve().then(() => this._finishDialogOpen()));
      }
      _startExitAnimation() {
        this._animationStateChanged.emit({
          state: "closing",
          totalTime: this._exitAnimationDuration,
        }),
          this._hostElement.classList.remove(uo),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(
                Va,
                `${this._exitAnimationDuration}ms`
              ),
              this._requestAnimationFrame(() =>
                this._hostElement.classList.add(za)
              ),
              this._waitForAnimationToComplete(
                this._exitAnimationDuration,
                this._finishDialogClose
              ))
            : Promise.resolve().then(() => this._finishDialogClose());
      }
      _updateActionSectionCount(t) {
        (this._actionSectionCount += t), this._changeDetectorRef.markForCheck();
      }
      _clearAnimationClasses() {
        this._hostElement.classList.remove(Ba, za);
      }
      _waitForAnimationToComplete(t, n) {
        this._animationTimer !== null && clearTimeout(this._animationTimer),
          (this._animationTimer = setTimeout(n, t));
      }
      _requestAnimationFrame(t) {
        this._ngZone.runOutsideAngular(() => {
          typeof requestAnimationFrame == "function"
            ? requestAnimationFrame(t)
            : t();
        });
      }
      _captureInitialFocus() {
        this._config.delayFocusTrap || this._trapFocus();
      }
      _openAnimationDone(t) {
        this._config.delayFocusTrap && this._trapFocus(),
          this._animationStateChanged.next({ state: "opened", totalTime: t });
      }
      ngOnDestroy() {
        super.ngOnDestroy(),
          this._animationTimer !== null && clearTimeout(this._animationTimer);
      }
      attachComponentPortal(t) {
        let n = super.attachComponentPortal(t);
        return (
          n.location.nativeElement.classList.add(
            "mat-mdc-dialog-component-host"
          ),
          n
        );
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(
        x(H),
        x(mn),
        x(D, 8),
        x(_i),
        x(gi),
        x(S),
        x(we),
        x(De, 8),
        x(vn)
      );
    }),
      (e.ɵcmp = j({
        type: e,
        selectors: [["mat-dialog-container"]],
        hostAttrs: [
          "tabindex",
          "-1",
          1,
          "mat-mdc-dialog-container",
          "mdc-dialog",
        ],
        hostVars: 10,
        hostBindings: function (n, o) {
          n & 2 &&
            (Nn("id", o._config.id),
            Be("aria-modal", o._config.ariaModal)("role", o._config.role)(
              "aria-labelledby",
              o._config.ariaLabel ? null : o._ariaLabelledByQueue[0]
            )("aria-label", o._config.ariaLabel)(
              "aria-describedby",
              o._config.ariaDescribedBy || null
            ),
            Ri("_mat-animation-noopable", !o._animationsEnabled)(
              "mat-mdc-dialog-container-with-actions",
              o._actionSectionCount > 0
            ));
        },
        standalone: !0,
        features: [Le, Me],
        decls: 3,
        vars: 0,
        consts: [
          [1, "mdc-dialog__container"],
          [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"],
          ["cdkPortalOutlet", ""],
        ],
        template: function (n, o) {
          n & 1 &&
            (p(0, "div", 0)(1, "div", 1),
            Ue(2, Th, 0, 0, "ng-template", 2),
            m()());
        },
        dependencies: [pi],
        styles: [
          '.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Poppins, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Poppins, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}',
        ],
        encapsulation: 2,
      }));
    let i = e;
    return i;
  })(),
  Va = "--mat-dialog-transition-duration";
function $a(i) {
  return i == null
    ? null
    : typeof i == "number"
    ? i
    : i.endsWith("ms")
    ? ai(i.substring(0, i.length - 2))
    : i.endsWith("s")
    ? ai(i.substring(0, i.length - 1)) * 1e3
    : i === "0"
    ? 0
    : null;
}
var _n = (function (i) {
    return (
      (i[(i.OPEN = 0)] = "OPEN"),
      (i[(i.CLOSING = 1)] = "CLOSING"),
      (i[(i.CLOSED = 2)] = "CLOSED"),
      i
    );
  })(_n || {}),
  bi = class {
    constructor(e, r, t) {
      (this._ref = e),
        (this._containerInstance = t),
        (this._afterOpened = new I()),
        (this._beforeClosed = new I()),
        (this._state = _n.OPEN),
        (this.disableClose = r.disableClose),
        (this.id = e.id),
        e.addPanelClass("mat-mdc-dialog-panel"),
        t._animationStateChanged
          .pipe(
            z((n) => n.state === "opened"),
            Y(1)
          )
          .subscribe(() => {
            this._afterOpened.next(), this._afterOpened.complete();
          }),
        t._animationStateChanged
          .pipe(
            z((n) => n.state === "closed"),
            Y(1)
          )
          .subscribe(() => {
            clearTimeout(this._closeFallbackTimeout), this._finishDialogClose();
          }),
        e.overlayRef.detachments().subscribe(() => {
          this._beforeClosed.next(this._result),
            this._beforeClosed.complete(),
            this._finishDialogClose();
        }),
        wi(
          this.backdropClick(),
          this.keydownEvents().pipe(
            z((n) => n.keyCode === 27 && !this.disableClose && !hn(n))
          )
        ).subscribe((n) => {
          this.disableClose ||
            (n.preventDefault(),
            Fh(this, n.type === "keydown" ? "keyboard" : "mouse"));
        });
    }
    close(e) {
      (this._result = e),
        this._containerInstance._animationStateChanged
          .pipe(
            z((r) => r.state === "closing"),
            Y(1)
          )
          .subscribe((r) => {
            this._beforeClosed.next(e),
              this._beforeClosed.complete(),
              this._ref.overlayRef.detachBackdrop(),
              (this._closeFallbackTimeout = setTimeout(
                () => this._finishDialogClose(),
                r.totalTime + 100
              ));
          }),
        (this._state = _n.CLOSING),
        this._containerInstance._startExitAnimation();
    }
    afterOpened() {
      return this._afterOpened;
    }
    afterClosed() {
      return this._ref.closed;
    }
    beforeClosed() {
      return this._beforeClosed;
    }
    backdropClick() {
      return this._ref.backdropClick;
    }
    keydownEvents() {
      return this._ref.keydownEvents;
    }
    updatePosition(e) {
      let r = this._ref.config.positionStrategy;
      return (
        e && (e.left || e.right)
          ? e.left
            ? r.left(e.left)
            : r.right(e.right)
          : r.centerHorizontally(),
        e && (e.top || e.bottom)
          ? e.top
            ? r.top(e.top)
            : r.bottom(e.bottom)
          : r.centerVertically(),
        this._ref.updatePosition(),
        this
      );
    }
    updateSize(e = "", r = "") {
      return this._ref.updateSize(e, r), this;
    }
    addPanelClass(e) {
      return this._ref.addPanelClass(e), this;
    }
    removePanelClass(e) {
      return this._ref.removePanelClass(e), this;
    }
    getState() {
      return this._state;
    }
    _finishDialogClose() {
      (this._state = _n.CLOSED),
        this._ref.close(this._result, {
          focusOrigin: this._closeInteractionType,
        }),
        (this.componentInstance = null);
    }
  };
function Fh(i, e, r) {
  return (i._closeInteractionType = e), i.close(r);
}
var po = new M("MatMdcDialogData"),
  jh = new M("mat-mdc-dialog-default-options"),
  Lh = new M("mat-mdc-dialog-scroll-strategy", {
    providedIn: "root",
    factory: () => {
      let i = v(de);
      return () => i.scrollStrategies.block();
    },
  });
var Uh = 0,
  fo = (() => {
    let e = class e {
      get openDialogs() {
        return this._parentDialog
          ? this._parentDialog.openDialogs
          : this._openDialogsAtThisLevel;
      }
      get afterOpened() {
        return this._parentDialog
          ? this._parentDialog.afterOpened
          : this._afterOpenedAtThisLevel;
      }
      _getAfterAllClosed() {
        let t = this._parentDialog;
        return t ? t._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      constructor(t, n, o, s, a, c, l, d) {
        (this._overlay = t),
          (this._defaultOptions = s),
          (this._scrollStrategy = a),
          (this._parentDialog = c),
          (this._openDialogsAtThisLevel = []),
          (this._afterAllClosedAtThisLevel = new I()),
          (this._afterOpenedAtThisLevel = new I()),
          (this.dialogConfigClass = _i),
          (this.afterAllClosed = Fe(() =>
            this.openDialogs.length
              ? this._getAfterAllClosed()
              : this._getAfterAllClosed().pipe(fe(void 0))
          )),
          (this._dialog = n.get(ao)),
          (this._dialogRefConstructor = bi),
          (this._dialogContainerType = Nh),
          (this._dialogDataToken = po);
      }
      open(t, n) {
        let o;
        (n = g(g({}, this._defaultOptions || new _i()), n)),
          (n.id = n.id || `mat-mdc-dialog-${Uh++}`),
          (n.scrollStrategy = n.scrollStrategy || this._scrollStrategy());
        let s = this._dialog.open(
          t,
          U(g({}, n), {
            positionStrategy: this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically(),
            disableClose: !0,
            closeOnDestroy: !1,
            closeOnOverlayDetachments: !1,
            container: {
              type: this._dialogContainerType,
              providers: () => [
                { provide: this.dialogConfigClass, useValue: n },
                { provide: Ke, useValue: n },
              ],
            },
            templateContext: () => ({ dialogRef: o }),
            providers: (a, c, l) => (
              (o = new this._dialogRefConstructor(a, n, l)),
              o.updatePosition(n?.position),
              [
                { provide: this._dialogContainerType, useValue: l },
                { provide: this._dialogDataToken, useValue: c.data },
                { provide: this._dialogRefConstructor, useValue: o },
              ]
            ),
          })
        );
        return (
          (o.componentRef = s.componentRef),
          (o.componentInstance = s.componentInstance),
          this.openDialogs.push(o),
          this.afterOpened.next(o),
          o.afterClosed().subscribe(() => {
            let a = this.openDialogs.indexOf(o);
            a > -1 &&
              (this.openDialogs.splice(a, 1),
              this.openDialogs.length || this._getAfterAllClosed().next());
          }),
          o
        );
      }
      closeAll() {
        this._closeDialogs(this.openDialogs);
      }
      getDialogById(t) {
        return this.openDialogs.find((n) => n.id === t);
      }
      ngOnDestroy() {
        this._closeDialogs(this._openDialogsAtThisLevel),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete();
      }
      _closeDialogs(t) {
        let n = t.length;
        for (; n--; ) t[n].close();
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(
        h(de),
        h(K),
        h(_e, 8),
        h(jh, 8),
        h(Lh),
        h(e, 12),
        h(bt),
        h(De, 8)
      );
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let i = e;
    return i;
  })();
var Ha = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = C({ type: e })),
    (e.ɵinj = w({ providers: [fo], imports: [Aa, pn, Ge, ho, ho] }));
  let i = e;
  return i;
})();
var Bh = (i) => ({ "light-mode": i }),
  bn = (() => {
    let e = class e {
      constructor(t, n) {
        (this.dialogRef = t), (this.data = n), (this.isLightMode = !1);
      }
      ngOnInit() {}
      closeDialog() {
        this.dialogRef.close();
      }
      toggleMode() {
        this.isLightMode = !this.isLightMode;
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)(x(bi), x(po));
    }),
      (e.ɵcmp = j({
        type: e,
        selectors: [["app-detail"]],
        decls: 18,
        vars: 7,
        consts: [
          [1, "full-container", 3, "ngClass"],
          [1, "header"],
          [1, "circle", "red", 3, "click"],
          [1, "circle", "yellow"],
          [1, "circle", "green"],
          [1, "toggle", 3, "click"],
          ["type", "checkbox"],
          [1, "content"],
          ["alt", "Project Image", 1, "image", 3, "src"],
          [1, "title"],
          [1, "desc"],
        ],
        template: function (n, o) {
          n & 1 &&
            (p(0, "div", 0)(1, "div", 1)(2, "div", 2),
            J("click", function () {
              return o.closeDialog();
            }),
            m(),
            R(3, "div", 3)(4, "div", 4),
            p(5, "div", 5),
            J("click", function () {
              return o.toggleMode();
            }),
            R(6, "input", 6)(7, "label"),
            m()(),
            p(8, "div", 7),
            R(9, "img", 8),
            p(10, "div", 9),
            f(11),
            m(),
            p(12, "div", 10),
            f(13),
            m(),
            p(14, "div", 9),
            f(15, "Tools"),
            m(),
            p(16, "div", 10),
            f(17),
            m()()()),
            n & 2 &&
              (ze("ngClass", No(5, Bh, o.isLightMode)),
              ie(9),
              ze("src", o.data.imageUrl, Ei),
              ie(2),
              Se(o.data.title),
              ie(2),
              Se(o.data.desc),
              ie(4),
              Se(o.data.tools));
        },
        dependencies: [Xo],
        styles: [
          '.full-container[_ngcontent-%COMP%]{width:800px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;color:#e8e8e8;background-color:#171717;border-radius:2px;overflow-y:auto;transition:background-color .3s ease,color .3s ease}.light-mode[_ngcontent-%COMP%]{background-color:#e9e9e9;color:#151515}.header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;width:100%;margin-bottom:20px}.circle[_ngcontent-%COMP%]{width:15px;height:15px;border-radius:50%;margin-right:10px;cursor:pointer}.red[_ngcontent-%COMP%]{background-color:#ff605c}.yellow[_ngcontent-%COMP%]{background-color:#ffbd44}.green[_ngcontent-%COMP%]{background-color:#00ca4e}.toggle[_ngcontent-%COMP%]{margin-left:auto}.toggle[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{display:none}.toggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:inline-block;width:70px;height:20px;background:#fff;border:2px solid #ddd;border-radius:20px;position:relative;transition:.25s ease-in;cursor:pointer}.toggle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before{content:"";width:20px;height:20px;background:#fffdfd;position:absolute;top:50%;left:10px;transform:translateY(-50%);border-radius:50%;transition:.2s ease-in-out}.toggle[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:#ffeb00}.toggle[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{left:40px;background:#ffbc00}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.image[_ngcontent-%COMP%]{width:100%;max-width:600px;height:auto;object-fit:cover;border-radius:5px;margin-bottom:20px}.title[_ngcontent-%COMP%]{margin-top:10px;font-size:24px;font-family:Poppins,sans-serif;text-transform:lowercase;margin-bottom:10px}.desc[_ngcontent-%COMP%]{text-align:left;font-size:13px;width:100%;max-width:600px;font-weight:300}',
        ],
      }));
    let i = e;
    return i;
  })();
var Ya = (() => {
  let e = class e {
    constructor() {
      (this.projectData = [
        {
          type: "UI/UX",
          title: "Resepedia",
          desc: "ini adalah project pertama saya pada dunia UI/Ui yang bertemakan website yang menyediakan resep . ini adalah tugas akhir dari mata kuliah desain pengalaman pengguna , yang pada hasil akhirnya mendapatkan nilai A",
          imageUrl: "../assets/img/resepedia.png",
          color: "	#BE3B20",
          tools: "Figma, Canva, Waze",
        },
        {
          type: "Social Media Specialist",
          title: "Positif Cup",
          desc: "Saya di pilih menjadi koordinator PDD dan bertugas untuk menyampaikan informasi melalui instagram @positifcup dan mengkoordinasi anggota yang bertugas sebagai dokumenter",
          color: "#0F8135",
          imageUrl: "../assets/img/positifcup.png",
          tools: "Photoshop, Canva,",
        },
        {
          type: "Angular Typescript",
          title: "Onic E sport",
          desc: "ini adalah projek saya semasa magang di Zetta bytes company , ini adalah website admin untuk menambahkan roaster baru dan biodata roaster, saya menerapkan array of object , form array , reactive form , Service Injection , Responsive Website, Search on Component , dan component component lain . ",
          imageUrl: "../assets/img/onic.png",
          tools:
            "Visual Studio Code; Service Injection, Responsive Design, CRUD, Array Of Object, Array On Array Form, Translate",
        },
        {
          type: "Social Media Specialist",
          title: "PKKBN SI 2023",
          desc: "Saya sebagai koordinator PDD yaitu untu mengelola dan menyampaikan infromasi melalui instagram PPKBNSI 2023 dan juga sebagai Dokumenter saat hari h",
          imageUrl: "../assets/img/pkkbn.png",
          tools: "Photoshop, Canva,",
        },
        {
          type: "Social Media Specialist",
          title: "Himasisfo",
          desc: "Jobdesc pada saat menjabat sebagai wakil kepala departemen yaitu mengelola , menyampaikan informasi melalui instagram himasisfo , dan juga project pengenalan pengurus kabinet ",
          imageUrl: "../assets/img/himasisfo.png",
          tools: "Photoshop, Canva; 3D Design, Photography ",
        },
      ]),
        (this.projectSubject = new W(this.projectData)),
        (this.allproject$ = this.projectSubject.asObservable());
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let i = e;
  return i;
})();
var Pe = (() => {
  let e = class e {
    constructor(t) {
      (this.router = t), (this.projectList = []), (this.isLightMode = !1);
    }
    goToHome() {
      this.router.navigate([""]);
    }
    goToAbout() {
      this.router.navigate(["/about"]);
    }
    goToProject() {
      this.router.navigate(["/project"]);
    }
    goToContact() {
      this.router.navigate(["contact"]);
    }
    toggleMode() {
      this.isLightMode = !this.isLightMode;
    }
    toggleFullscreen() {
      document.fullscreenElement
        ? document.exitFullscreen && document.exitFullscreen()
        : document.documentElement.requestFullscreen();
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(x(Z));
  }),
    (e.ɵcmp = j({
      type: e,
      selectors: [["app-sidebar"]],
      decls: 19,
      vars: 0,
      consts: [
        [1, "menu"],
        [1, "lingkaran-container"],
        [1, "lingkaran", "merah"],
        [1, "lingkaran", "kuning"],
        [1, "lingkaran", "hijau", 3, "click"],
        [1, "sidebar-container"],
        [1, "sidebar"],
        [1, "home", 3, "click"],
        [1, "about", 3, "click"],
        [1, "project", 3, "click"],
        [1, "contact", 3, "click"],
      ],
      template: function (n, o) {
        n & 1 &&
          (p(0, "header", 0)(1, "div", 1),
          R(2, "div", 2)(3, "div", 3),
          p(4, "div", 4),
          J("click", function () {
            return o.toggleFullscreen();
          }),
          m()()(),
          p(5, "div", 5)(6, "div", 6)(7, "div", 7),
          J("click", function () {
            return o.goToHome();
          }),
          p(8, "p"),
          f(9, "Home"),
          m()(),
          p(10, "div", 8),
          J("click", function () {
            return o.goToAbout();
          }),
          p(11, "p"),
          f(12, "About"),
          m()(),
          p(13, "div", 9),
          J("click", function () {
            return o.goToProject();
          }),
          p(14, "p"),
          f(15, "Project"),
          m()(),
          p(16, "div", 10),
          J("click", function () {
            return o.goToContact();
          }),
          p(17, "p"),
          f(18, "Contact"),
          m()()()());
      },
      styles: [
        ".menu[_ngcontent-%COMP%]{margin-top:30px;background:#ffffff80;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.18);text-align:center;width:90vw;height:55px;position:absolute;border-bottom:solid .5px gray;border-top-left-radius:10px;border-top-right-radius:10px}.sidebar-container[_ngcontent-%COMP%]{cursor:pointer;position:absolute;z-index:1;top:32px;right:10%;height:50px}.sidebar[_ngcontent-%COMP%]{display:flex;position:relative;top:10px;gap:10px;flex-wrap:wrap}.home[_ngcontent-%COMP%], .about[_ngcontent-%COMP%], .project[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]{height:30px;border-radius:50px;transition:background .3s ease,backdrop-filter .3s ease,-webkit-backdrop-filter .3s ease;display:flex;align-items:center;justify-content:center;padding:0 10px}.home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .project[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#1c204b}.home[_ngcontent-%COMP%]:hover, .about[_ngcontent-%COMP%]:hover, .project[_ngcontent-%COMP%]:hover, .contact[_ngcontent-%COMP%]:hover{background:#1c204b40;outline:ridge 2px rgba(30,0,162,.635);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.home[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .about[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .project[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#fff}.lingkaran-container[_ngcontent-%COMP%]{display:flex;margin-top:20px;margin-left:20px;width:200px}.lingkaran[_ngcontent-%COMP%]{width:15px;height:15px;border-radius:50%;margin-left:10px}.merah[_ngcontent-%COMP%]{background-color:#ff4545}.kuning[_ngcontent-%COMP%]{background-color:#ffcd38}.hijau[_ngcontent-%COMP%]{background-color:#32ff40}@media (max-width: 768px){.menu[_ngcontent-%COMP%]{margin-top:30px;background:#ffffff80;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.18);text-align:center;width:90vw;height:55px;position:absolute;border-bottom:solid .5px gray;border-top-left-radius:10px;border-top-right-radius:10px}.sidebar-container[_ngcontent-%COMP%]{cursor:pointer;position:absolute;z-index:1;top:32px;right:10%;height:50px}.sidebar[_ngcontent-%COMP%]{display:flex;position:relative;top:10px;gap:10px}.lingkaran-container[_ngcontent-%COMP%]{display:none}.home[_ngcontent-%COMP%], .about[_ngcontent-%COMP%], .project[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]{height:30px;border-radius:15px;padding:5px 15px;transition:background .3s ease,backdrop-filter .3s ease,-webkit-backdrop-filter .3s ease;display:flex;align-items:center;justify-content:center}.home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .project[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#1c204b}.home[_ngcontent-%COMP%]:hover, .about[_ngcontent-%COMP%]:hover, .project[_ngcontent-%COMP%]:hover, .contact[_ngcontent-%COMP%]:hover{background:#1c204b40;outline:ridge 2px rgba(30,0,162,.635);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.home[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .about[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .project[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#fff}}",
      ],
    }));
  let i = e;
  return i;
})();
function Vh(i, e) {
  if (i & 1) {
    let r = Po();
    p(0, "div", 4)(1, "div", 5),
      J("click", function () {
        let n = Do(r).$implicit,
          o = Fn();
        return So(o.openDialog(n));
      }),
      p(2, "div", 6),
      R(3, "img", 7),
      m(),
      p(4, "div", 8),
      R(5, "div", 9),
      p(6, "div", 10)(7, "div", 11),
      f(8),
      m(),
      p(9, "div", 12),
      R(10, "div", 13)(11, "div", 14)(12, "div", 15),
      m()(),
      p(13, "div", 16),
      f(14),
      m(),
      p(15, "p", 17),
      f(16),
      m()()()();
  }
  if (i & 2) {
    let r = e.$implicit;
    ie(3),
      ze("src", r.imageUrl, Ei),
      ie(5),
      Se(r.type),
      ie(6),
      Se(r.title),
      ie(2),
      Se(r.desc);
  }
}
var Ga = (() => {
  let e = class e {
    constructor(t, n, o) {
      (this.router = t),
        (this.projectDataService = n),
        (this.dialog = o),
        (this.projectList = []);
    }
    ngOnInit() {
      this.projectDataService.allproject$.subscribe((t) => {
        this.projectList = t;
      });
    }
    openDialog(t) {
      this.dialog.open(bn, { data: t });
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(x(Z), x(Ya), x(fo));
  }),
    (e.ɵcmp = j({
      type: e,
      selectors: [["app-project"]],
      decls: 5,
      vars: 1,
      consts: [
        ["data-aos", "fade-up", 1, "fullcontainer"],
        [1, "container"],
        [1, "box-container"],
        [
          "class",
          "project-container",
          "data-aos",
          "fade-up",
          4,
          "ngFor",
          "ngForOf",
        ],
        ["data-aos", "fade-up", 1, "project-container"],
        [1, "card", "work", 3, "click"],
        [1, "img-section"],
        [
          "alt",
          "Project Image",
          2,
          "width",
          "210px",
          "height",
          "90px",
          "object-fit",
          "cover",
          3,
          "src",
        ],
        [1, "card-desc"],
        [1, "cardshape"],
        [1, "card-header"],
        [1, "card-title"],
        [1, "card-menu"],
        [1, "dotred"],
        [1, "dotyellow"],
        [1, "dotgreen"],
        [1, "card-time"],
        [1, "recent"],
      ],
      template: function (n, o) {
        n & 1 &&
          (p(0, "div", 0),
          R(1, "app-sidebar"),
          p(2, "div", 1)(3, "div", 2),
          Ue(4, Vh, 17, 4, "div", 3),
          m()()()),
          n & 2 && (ie(4), ze("ngForOf", o.projectList));
      },
      dependencies: [Ko, Pe],
      styles: [
        ".fullcontainer[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100vw;min-height:100vh;background-image:url(https://i.pinimg.com/736x/24/b3/c8/24b3c8cf160f3cb8d890ee7e87968d4a.jpg);background-size:cover}.container[_ngcontent-%COMP%]{position:relative;top:56.5px;padding-bottom:10px;justify-content:center;width:90vw;height:34vw;background-color:#dadada;margin-top:30px;background:#ffffff80;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(4px);border-left:1px solid rgba(255,255,255,.18);border-right:1px solid rgba(255,255,255,.18);border-top:none;display:flex;border-bottom-right-radius:10px;border-bottom-left-radius:10px;align-items:center;scroll-behavior:smooth;overflow-y:scroll}.container[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px;height:30px}.container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#0000004d;border-radius:10px}.container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#ffffff1a}.menu[_ngcontent-%COMP%]{margin-top:30px;background:#ffffff80;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.18);text-align:center;width:90vw;height:55px;position:absolute;border-bottom:solid .5px gray;border-top-left-radius:10px;border-top-right-radius:10px}.title[_ngcontent-%COMP%]{margin-left:60px;font-weight:500}.nama[_ngcontent-%COMP%]{font-size:32px;display:flex;position:relative}.highlight[_ngcontent-%COMP%]{margin-right:5px;transition:transform .3s,margin .3s}.hover-text[_ngcontent-%COMP%]{margin-left:300px;position:absolute;top:0;left:0;opacity:0;transition:opacity .3s,transform .6s;transform:translateY(0)}.nama[_ngcontent-%COMP%]:hover   .hover-text[_ngcontent-%COMP%]{opacity:1;transform:translateY(-100%);background:-webkit-linear-gradient(#9e9e9e,rgb(192,192,192));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.lingkaran-container[_ngcontent-%COMP%]{display:flex;margin-top:20px;margin-left:20px}.lingkaran[_ngcontent-%COMP%]{width:15px;height:15px;border-radius:50px;margin-left:10px}.merah[_ngcontent-%COMP%]{background-color:#ff4545}.kuning[_ngcontent-%COMP%]{background-color:#ffcd38}.hijau[_ngcontent-%COMP%]{background-color:#32ff40}.contact[_ngcontent-%COMP%]:hover{background:#ffffff40;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.project-container[_ngcontent-%COMP%]{margin-bottom:60px}.box-container[_ngcontent-%COMP%]{gap:5px;position:absolute;top:50px;width:900px;display:flex;flex-wrap:wrap;justify-content:space-between}.card[_ngcontent-%COMP%]{--primary-clr: #1c204b;--dot-clr: #bbc0ff;--play: hsl(195, 74%, 62%);width:200px;height:170px;border-radius:10px}.card[_ngcontent-%COMP%]{font-family:Arial;color:#fff;display:grid;cursor:pointer;grid-template-rows:50px 1fr}.card[_ngcontent-%COMP%]:hover   .img-section[_ngcontent-%COMP%]{transform:translateY(-1em)}.card[_ngcontent-%COMP%]:hover   .card-desc[_ngcontent-%COMP%]{outline:ridge 4px rgb(151,151,255)}.mat-mdc-dialog-surface[_ngcontent-%COMP%], .mdc-dialog__surface[_ngcontent-%COMP%]{border-radius:20px!important}.card-desc[_ngcontent-%COMP%]{width:180px;box-shadow:#3c40434d 0 1px 2px,#3c404326 0 2px 6px 2px;border-radius:10px;padding:15px;position:relative;top:-15px;display:grid;gap:10px;background:var(--primary-clr)}.card-time[_ngcontent-%COMP%]{font-size:1.7em;font-weight:500}.img-section[_ngcontent-%COMP%]{transition:.2s cubic-bezier(.25,.46,.45,.94);border-top-left-radius:10px;border-top-right-radius:10px;background-size:cover}.img-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-top-left-radius:10px;border-top-right-radius:10px;background-size:cover}.image-overlay[_ngcontent-%COMP%]{position:absolute;width:200px;height:50px;background-color:#dadadab3}.card-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.card-title[_ngcontent-%COMP%]{flex:1;font-size:.9em;font-weight:500}.card-menu[_ngcontent-%COMP%]{display:flex;gap:4px;margin-inline:auto}.card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{float:right;max-width:100%;max-height:100%}.dotred[_ngcontent-%COMP%]{width:5px;height:5px;border-radius:50%;background-color:#ff4545}.dotyellow[_ngcontent-%COMP%]{width:5px;height:5px;border-radius:50%;background-color:#ffcd38}.dotgreen[_ngcontent-%COMP%]{width:5px;height:5px;border-radius:50%;background-color:#32ff40}.card[_ngcontent-%COMP%]   .recent[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px;line-height:1;font-size:.8em}@media only screen and (max-width: 708px){.container[_ngcontent-%COMP%]{height:100vh}.box-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;height:768px;width:350px;overflow:hidden}}.fade-in[_ngcontent-%COMP%]{opacity:0;transition:opacity .5s ease}",
      ],
    }));
  let i = e;
  return i;
})();
var Za = (() => {
  let e = class e {
    constructor(t) {
      this.router = t;
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(x(Z));
  }),
    (e.ɵcmp = j({
      type: e,
      selectors: [["app-home"]],
      decls: 11,
      vars: 0,
      consts: [
        [1, "fullcontainer"],
        [1, "container"],
        [1, "title"],
        [1, "nama"],
        [1, "hello"],
        [1, "shimmer"],
        [1, "desc"],
      ],
      template: function (n, o) {
        n & 1 &&
          (p(0, "div", 0),
          R(1, "app-sidebar"),
          p(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4),
          f(6, "hello ,its me"),
          m(),
          p(7, "p", 5),
          f(8, "Nadira Nur Wiradatya."),
          m()(),
          p(9, "div", 6),
          f(10, "you can also call me arya"),
          m()()()());
      },
      dependencies: [Pe],
      styles: [
        ".fullcontainer[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100vw;min-height:100vh;background-image:url(https://i.pinimg.com/736x/24/b3/c8/24b3c8cf160f3cb8d890ee7e87968d4a.jpg);background-size:cover}.container[_ngcontent-%COMP%]{position:relative;top:56.5px;padding-bottom:10px;justify-content:center;width:90vw;height:34vw;background-color:#fff;margin-top:30px;background:#ffffff80;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(4px);border-left:1px solid rgba(255,255,255,.18);border-right:1px solid rgba(255,255,255,.18);border-top:none;display:flex;border-bottom-right-radius:10px;border-bottom-left-radius:10px;align-items:center;overflow-y:auto;overflow-x:hidden}.title[_ngcontent-%COMP%]{max-width:900px;margin-left:110px}.highlight[_ngcontent-%COMP%]{margin-right:5px;transition:transform .3s,margin .3s}.lingkaran-container[_ngcontent-%COMP%]{display:flex;margin-top:20px;margin-left:20px}.lingkaran[_ngcontent-%COMP%]{width:15px;height:15px;border-radius:50%;margin-left:10px}.merah[_ngcontent-%COMP%]{background-color:#ff605c}.kuning[_ngcontent-%COMP%]{background-color:#ffbd44}.hijau[_ngcontent-%COMP%]{background-color:#00ca4e}.nama[_ngcontent-%COMP%]{width:1000px}.hello[_ngcontent-%COMP%]{cursor:default;font-family:poppins;font-size:32px;position:relative;bottom:30px;color:#454545;left:4px}.desc[_ngcontent-%COMP%]{cursor:default;font-family:poppins;font-size:12px;position:relative;color:#454545;top:5px;left:4px}.shimmer[_ngcontent-%COMP%]{font-family:poppins;font-weight:500;font-size:74px;display:inline;z-index:5}.shimmer[_ngcontent-%COMP%]{cursor:pointer;color:#ffffff1a;background:-webkit-gradient(linear,left top,right top,from(#222),to(#222),color-stop(.5,#ffffff));background:-moz-gradient(linear,left top,right top,from(#222),to(#222),color-stop(.5,#fff));background:gradient(linear,left top,right top,from(#222),to(#222),color-stop(.5,#fff));-webkit-background-size:125px 100%;-moz-background-size:125px 100%;background-size:125px 100%;-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;-webkit-animation-name:_ngcontent-%COMP%_shimmer;-moz-animation-name:shimmer;animation-name:_ngcontent-%COMP%_shimmer;-webkit-animation-duration:2s;-moz-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;animation-iteration-count:infinite;background-repeat:no-repeat;background-position:0 0;background-color:#222}@-moz-keyframes shimmer{0%{background-position:top left}to{background-position:top right}}@-webkit-keyframes _ngcontent-%COMP%_shimmer{0%{background-position:top left}to{background-position:top right}}@-o-keyframes shimmer{0%{background-position:top left}to{background-position:top right}}@keyframes _ngcontent-%COMP%_shimmer{0%{background-position:top left}to{background-position:top right}}.hover-text[_ngcontent-%COMP%]{opacity:0;transition:opacity .5s ease,transform .5s ease;position:absolute;bottom:300px;font-size:74px;transform:translateY(50px);z-index:1}.shimmer[_ngcontent-%COMP%]:hover ~ .hover-text[_ngcontent-%COMP%]{opacity:1;transform:translateY(-30px)}@media only screen and (max-width: 708px){.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:70vh}.shimmer[_ngcontent-%COMP%]{position:relative;top:px;margin-left:230px;max-width:300px;font-size:30px}.hello[_ngcontent-%COMP%]{font-size:18px}}",
      ],
    }));
  let i = e;
  return i;
})();
var qa = (() => {
  let e = class e {
    constructor() {
      this.documentationData = [
        {
          title: "image1",
          imageUrl:
            "https://i.pinimg.com/564x/ef/0c/fd/ef0cfd5f08eaf08c086965ed8e335961.jpg",
          size: { width: 1024, height: 768 },
        },
        {
          title: "image2",
          imageUrl:
            "https://i.pinimg.com/564x/b4/1c/3c/b41c3ca065b9eaa404d01b4676744ad7.jpg",
          size: { width: 800, height: 600 },
        },
        {
          title: "image3",
          imageUrl:
            "https://i.pinimg.com/564x/3b/5f/61/3b5f61b4932062007dfe126a3a254cbf.jpg",
          size: { width: 640, height: 480 },
        },
        {
          title: "image4",
          imageUrl:
            "https://i.pinimg.com/474x/1e/56/fe/1e56fe7d4e945dbe60441236a088c0f7.jpg",
          size: { width: 1920, height: 1080 },
        },
      ];
    }
    getDocumentationData() {
      return this.documentationData;
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵprov = _({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let i = e;
  return i;
})();
var Xa = (() => {
  let e = class e {
    constructor(t, n) {
      (this.router = t),
        (this.documentation = n),
        (this.documentationData = []);
    }
    ngOnInit() {
      this.documentationData = this.documentation.getDocumentationData();
    }
    getWidth(t) {
      return t.split("x")[0] + "px";
    }
    getHeight(t) {
      return t.split("x")[1] + "px";
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(x(Z), x(qa));
  }),
    (e.ɵcmp = j({
      type: e,
      selectors: [["app-about"]],
      decls: 124,
      vars: 0,
      consts: [
        [
          "href",
          Io`https://fonts.googleapis.com/css?family=Schoolbell&v1`,
          "rel",
          "stylesheet",
        ],
        [1, "fullcontainer"],
        [1, "container"],
        [1, "menu"],
        [1, "lingkaran-container"],
        [1, "lingkaran", "merah"],
        [1, "lingkaran", "kuning"],
        [1, "lingkaran", "hijau"],
        [1, "article"],
        [1, "profile"],
        [1, "profile-picture"],
        [1, "image"],
        [1, "image-2"],
        [1, "profile-article-container"],
        [1, "profile-title"],
        [1, "black"],
        [1, "profile-desc"],
        [1, "highlight", 2, "color", "white"],
        [1, "blue"],
        ["data-aos", "fade-up", 1, "name"],
        [1, "about"],
        [2, "color", "rgb(74, 20, 33)"],
        [2, "color", "rgb(12, 28, 74)"],
        [1, "highlight"],
        [1, "image-3"],
        [1, "image-4"],
        ["data-aos", "fade-up", 1, "image-container"],
        [1, "flex"],
        ["data-aos", "fade-up", 1, "image1"],
        [1, "overlay"],
        [1, "detail-button"],
        ["data-aos", "fade-up", 1, "image2"],
        [1, "about2"],
        [
          2,
          "padding",
          "0px 5px",
          "width",
          "auto",
          "height",
          "20px",
          "border-radius",
          "4px",
          "background-color",
          "rgb(0, 117, 59)",
          "transform",
          "rotate(15deg)",
        ],
        [
          2,
          "padding",
          "0px 5px",
          "width",
          "auto",
          "height",
          "20px",
          "border-radius",
          "4px",
          "background-color",
          "rgb(146, 26, 160)",
          "transform",
          "rotate(15deg)",
        ],
        [1, "image3"],
        [1, "image4"],
        [1, "image-5"],
        [1, "image-6"],
        [1, "footer"],
      ],
      template: function (n, o) {
        n & 1 &&
          (R(0, "link", 0),
          p(1, "div", 1),
          R(2, "app-sidebar"),
          p(3, "div", 2)(4, "div", 3)(5, "div", 4),
          R(6, "div", 5)(7, "div", 6)(8, "div", 7),
          m()(),
          p(9, "div", 8)(10, "div", 9),
          R(11, "div", 10)(12, "div", 11)(13, "div", 12),
          p(14, "div", 13)(15, "div", 14),
          f(16, " Nadir"),
          p(17, "span", 15),
          f(18, "a"),
          m(),
          f(19, " Nu"),
          p(20, "span", 15),
          f(21, "r"),
          m(),
          f(22, " Wiradat"),
          p(23, "span", 15),
          f(24, "ya"),
          m()(),
          p(25, "div", 16),
          f(
            26,
            " a creative from Pacitan born on April 6, 2003. I'm passionate about "
          ),
          p(27, "span", 17),
          f(28, "photography"),
          m(),
          f(29, ", "),
          p(30, "span", 17),
          f(31, "design"),
          m(),
          f(32, ", and playing "),
          p(33, "span", 17),
          f(34, "guitar"),
          m(),
          f(35, " and "),
          p(36, "span", 17),
          f(37, "bass"),
          m(),
          f(38, ". With a blend of "),
          p(39, "span", 18),
          f(40, "design"),
          m(),
          f(41, " expertise and "),
          p(42, "span", 18),
          f(43, "programming"),
          m(),
          f(
            44,
            " skills, I create visually stunning digital experiences that are both beautiful and functional. From crafting captivating visuals to coding seamless user interfaces, I thrive on bringing ideas to life. Outside of work, you'll often find me behind the camera, sketching new designs, or jamming on my guitar. I'm excited about the endless possibilities of design and technology and look forward to collaborating with you. "
          ),
          m()()(),
          p(45, "div", 19)(46, "div", 20)(47, "span", 21),
          f(48, "My"),
          m(),
          p(49, "span", 22),
          f(50, "Experience"),
          m()(),
          p(51, "p"),
          f(52, " Since "),
          p(53, "span", 23),
          f(54, "high school"),
          m(),
          f(
            55,
            ", I have always been entrusted with the responsibility of being the documentation coordinator. This role provided me with numerous opportunities to hone my skills in"
          ),
          p(56, "span", 18),
          f(57, "videography and video editing"),
          m(),
          f(
            58,
            ". One of the most memorable achievements was when a friend and I created a video and uploaded it to YouTube, which successfully garnered "
          ),
          p(59, "span", 23),
          f(60, "10,000"),
          m(),
          f(
            61,
            " views. Additionally, during my high school years, I actively worked as a video editor. I had an extraordinary opportunity when I was selected to "
          ),
          p(62, "span", 18),
          f(
            63,
            "represent SMA 1 Ngadirojo in a videography competition at the county level in Pacitan."
          ),
          m(),
          f(
            64,
            " Despite using KineMaster and PowerDirector at that time, I felt quite proficient in video editing. I was able to maximize the features of these applications and understood their functionalities very well. This experience not only enhanced my skills in videography and editing but also built my confidence in creating and producing content. Considering the advancements in technology and editing tools today, I feel proud of the accomplishments and skills I possessed back then. These experiences taught me the importance of creativity, perseverance, and the ability to make the most of available resources to produce the best work possible. I hope to continue developing these skills and create more valuable and inspiring content in the future. "
          ),
          m()(),
          R(65, "div", 24)(66, "div", 25),
          p(67, "div", 26)(68, "div", 27)(69, "div", 28)(70, "div", 29)(
            71,
            "span",
            30
          ),
          f(72, "Cek Detail"),
          m()()(),
          p(73, "div", 31)(74, "div", 29)(75, "span", 30),
          f(76, "Cek Detail"),
          m()()()(),
          p(77, "div", 19)(78, "div", 32)(79, "span", 21),
          f(80, "University"),
          m(),
          p(81, "span", 22),
          f(82, "Experience"),
          m()(),
          p(83, "p"),
          f(84, " Sebagai mahasiswa "),
          p(85, "span", 18),
          f(86, "Sistem Informasi Jurusan Informatika"),
          m(),
          f(87, " di "),
          p(88, "span", 33),
          f(89, "UPN Veteran Yogyakarta"),
          m(),
          f(
            90,
            " , saya aktif berpartisipasi dalam kehidupan kampus. Saya tidak hanya fokus pada akademik, tetapi juga terlibat dalam berbagai kegiatan organisasi dan kepanitiaan. Salah satu peran terpenting saya adalah sebagai"
          ),
          p(91, "span", 18),
          f(
            92,
            "Wakil Kepala Departemen Media Komunikasi dan Informasi di himpunan"
          ),
          m(),
          f(93, " , di mana saya bertanggung jawab sebagai "),
          p(94, "span", 18),
          f(95, "Pengurus Instagram Himpunan"),
          m(),
          f(
            96,
            " Pengurus Instagram Himpunan bersama dengan TIM Medkominfo. Dalam posisi ini, saya telah mengembangkan keterampilan desain menggunakan berbagai tools seperti "
          ),
          p(97, "span", 23),
          f(98, "Photoshop dan Canva"),
          m(),
          f(
            99,
            ", memastikan konten yang kami bagikan memiliki dampak visual yang kuat dan menarik. Selain menjadi bagian dari dunia desain, saya juga telah merambah ke bidang "
          ),
          p(100, "span", 23),
          f(101, "Web Development"),
          m(),
          f(
            102,
            ". Berkat pemahaman saya dalam UI/UX Design, saya mampu menghasilkan tata letak yang intuitif dan menarik bagi pengguna. Selanjutnya, saya belajar tentang "
          ),
          p(103, "span", 23),
          f(104, "Front End Development"),
          m(),
          f(
            105,
            ", menguasai bahasa-bahasa seperti HTML, CSS, JavaScript, PHP, dan Typescript. Saat ini, saya fokus menggunakan "
          ),
          p(106, "span", 23),
          f(107, "Angular Typescript sebagai framework utama"),
          m(),
          f(
            108,
            " untuk proyek-proyek web saya. Meskipun demikian, saya juga memiliki pengetahuan yang cukup tentang React dan Next.js. Pengalaman magang saya di "
          ),
          p(109, "span", 34),
          f(110, "PT Zettabyte sebagai Tester di Divisi Feature Development"),
          m(),
          f(
            111,
            " telah memperkaya pemahaman saya tentang proses pengembangan perangkat lunak. Ini memberi saya wawasan yang berharga tentang bagaimana menguji dan memastikan kualitas produk perangkat lunak sebelum diluncurkan ke pasar. Saya selalu bersemangat untuk terus belajar dan mengembangkan diri saya dalam dunia Front End Development. Setiap tantangan baru adalah kesempatan bagi saya untuk mengeksplorasi dan mengasah keterampilan saya lebih lanjut. "
          ),
          m()(),
          p(112, "div", 27)(113, "div", 35)(114, "div", 29)(115, "span", 30),
          f(116, "Cek Detail"),
          m()()(),
          p(117, "div", 36)(118, "div", 29)(119, "span", 30),
          f(120, "Cek Detail"),
          m()()(),
          R(121, "div", 37)(122, "div", 38),
          m(),
          R(123, "div", 39),
          m()()()());
      },
      dependencies: [Pe],
      styles: [
        '.fullcontainer[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100vw;min-height:100vh;background-image:url(https://i.pinimg.com/736x/24/b3/c8/24b3c8cf160f3cb8d890ee7e87968d4a.jpg);background-size:cover}.image[_ngcontent-%COMP%]{background-image:url("./media/pin-3PJC3D5F.png");background-size:cover;position:absolute;bottom:800px;right:810px;z-index:30px;width:170px;height:170px}.image-2[_ngcontent-%COMP%]{background-image:url("./media/camera-7ZLJT5T3.png");background-size:cover;position:absolute;top:200px;left:810px;z-index:30px;width:170px;height:170px}.image-3[_ngcontent-%COMP%]{background-image:url("./media/clap-A7EENGH4.png");background-size:cover;position:absolute;bottom:200px;right:810px;z-index:8;width:170px;height:170px;filter:blur(2px)}.image-4[_ngcontent-%COMP%]{background-image:url("./media/ball-DHELS764.png");background-size:cover;position:absolute;bottom:0;left:810px;z-index:8;width:170px;height:170px;margin-bottom:50px}.image-5[_ngcontent-%COMP%]{background-image:url("./media/toga-FVIMWA43.png");background-size:cover;position:absolute;top:1250px;left:820px;z-index:1;width:170px;filter:blur(2px);height:170px}.image-6[_ngcontent-%COMP%]{background-image:url("./media/code-YVDQD7O5.png");background-size:cover;position:absolute;top:1300px;right:820px;z-index:0;width:170px;height:170px}.container[_ngcontent-%COMP%]{position:relative;top:56.5px;padding-bottom:10px;justify-content:center;width:90vw;height:34vw;background-color:#fff;margin-top:30px;background:#ffffff80;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(4px);border-left:1px solid rgba(255,255,255,.18);border-right:1px solid rgba(255,255,255,.18);border-top:none;display:flex;border-bottom-right-radius:10px;border-bottom-left-radius:10px;align-items:center;overflow-y:auto;overflow-x:hidden}.container[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px;height:30px}.container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#0000004d;border-radius:10px}.container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#ffffff1a}.article[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;position:relative;top:280px;height:900px}.profile[_ngcontent-%COMP%]{cursor:pointer;background-size:50%;background-position:20%;background-image:url(https://st2.depositphotos.com/6879548/11905/v/950/depositphotos_119050944-stock-illustration-paper-line-vector-background-detailed.jpg);display:flex;width:900px;bottom:10px;gap:20px;height:280px;margin-bottom:30px;border-radius:10px;outline:ridge 1px rgb(132,121,121);width:auto}.profile-picture[_ngcontent-%COMP%]{margin:20px;width:230px;height:230px;background-image:url("./media/pp-6LLI2TUT.jpg");background-size:cover;background-position:50% 40%;transform:rotate(-3deg)}.profile-article-container[_ngcontent-%COMP%]{margin:20px;width:530px;font-size:32px}.profile-title[_ngcontent-%COMP%]{margin-top:25px;color:#252525;cursor:pointer}.profile-title[_ngcontent-%COMP%]:hover   .highlight[_ngcontent-%COMP%]{transform:translate(10px)}.profile-desc[_ngcontent-%COMP%]{margin-top:20px;font-size:12px}.profile[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%], .highlight[_ngcontent-%COMP%]{padding:0 5px;width:auto;height:20px;border-radius:4px;background-color:#e44242;transform:rotate(15deg)}.blue[_ngcontent-%COMP%]{padding:0 5px;width:auto;height:20px;border-radius:4px;background-color:#4252e4;transform:rotate(15deg)}.profile[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%]{color:#252525}.profile[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%]{color:#fff;padding:0 5px;width:auto;height:20px;border-radius:4px;background-color:#4252e4;transform:rotate(15deg)}.imageleft[_ngcontent-%COMP%]{width:200px;height:200px;background-color:#639}.imagecenter[_ngcontent-%COMP%]{position:relative;bottom:30px;width:200px;height:250px;background-color:#639;border-radius:10px}.imageright[_ngcontent-%COMP%]{width:200px;height:200px;background-color:#639}.name[_ngcontent-%COMP%]{width:900px;color:#fff;display:grid;gap:30px}.about[_ngcontent-%COMP%]{font-size:64px;margin-bottom:10px;height:auto}.about2[_ngcontent-%COMP%]{margin-top:20px;margin-left:200px;font-size:64px;margin-bottom:10px;height:auto}.image-container[_ngcontent-%COMP%]{margin-top:10px;display:flex;flex-wrap:wrap;justify-content:center;max-width:900px;top:300px;gap:20px;height:auto}.image1[_ngcontent-%COMP%]{width:600px;height:250px;background-image:url("./media/SMA-Q7GUZMRD.png");background-size:cover;position:relative;border-radius:30px}.image2[_ngcontent-%COMP%]{width:280px;height:250px;background-image:url(https://i.pinimg.com/564x/87/34/b8/8734b8a55007b53029e06df52ba61ce5.jpg);position:relative;border-radius:30px}.image3[_ngcontent-%COMP%]{width:280px;height:250px;background-image:url("./media/gedung-FX3TXEBH.png");background-size:cover;position:relative;border-radius:30px}.image4[_ngcontent-%COMP%]{width:600px;height:250px;background-image:url("./media/UPN-45YCZD72.png");background-size:cover;position:relative;border-radius:30px}.image-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;justify-content:center;gap:20px;height:auto}.flex[_ngcontent-%COMP%]{display:flex;gap:20px}.image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image1[_ngcontent-%COMP%]:before, .image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%]:before, .image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%]:before, .image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image4[_ngcontent-%COMP%]:before{border-radius:30px;content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:#0000;transition:background-color .3s}.image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image1[_ngcontent-%COMP%]:hover:before, .image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%]:hover:before, .image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%]:hover:before, .image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image4[_ngcontent-%COMP%]:hover:before{background-color:#00000080}.overlay[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;opacity:0;transition:opacity .3s}.image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image1[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image4[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}.detail-button[_ngcontent-%COMP%]{background-color:#ffffffb3;padding:10px 20px;border-radius:30px;color:#000;text-decoration:none}.footer[_ngcontent-%COMP%]{width:900px;height:100px}@media only screen and (max-width: 708px){.container[_ngcontent-%COMP%]{height:70%}.image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image1[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .image4[_ngcontent-%COMP%]{width:100px;height:auto;border-radius:10px}.overlay[_ngcontent-%COMP%]{padding:5px 10px}.detail-button[_ngcontent-%COMP%]{padding:5px 10px;border-radius:20px;font-size:12px}.article[_ngcontent-%COMP%]{max-width:90%;margin:20px auto;padding:20px}}',
      ],
    }));
  let i = e;
  return i;
})();
var Ka = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵcmp = j({
      type: e,
      selectors: [["app-contact"]],
      decls: 34,
      vars: 0,
      consts: [
        [1, "fullcontainer"],
        [1, "container"],
        [1, "article"],
        [1, "top-container"],
        [1, "top-left"],
        [1, "up"],
        [
          "href",
          "https://www.instagram.com/direct/t/not.dira",
          "target",
          "_blank",
        ],
        [1, "card1"],
        [
          "fill-rule",
          "nonzero",
          "height",
          "30px",
          "width",
          "30px",
          "viewBox",
          "0,0,256,256",
          0,
          "xmlns",
          "xlink",
          "http://www.w3.org/1999/xlink",
          "xmlns",
          "http://www.w3.org/2000/svg",
          1,
          "instagram",
        ],
        [
          "text-anchor",
          "none",
          "font-size",
          "none",
          "font-weight",
          "none",
          "font-family",
          "none",
          "stroke-dashoffset",
          "0",
          "stroke-dasharray",
          "",
          "stroke-miterlimit",
          "10",
          "stroke-linejoin",
          "miter",
          "stroke-linecap",
          "butt",
          "stroke-width",
          "1",
          "stroke",
          "none",
          "fill-rule",
          "nonzero",
          2,
          "mix-blend-mode",
          "normal",
        ],
        ["transform", "scale(8,8)"],
        [
          "d",
          "M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z",
        ],
        [1, "card2"],
        [
          "xmlns",
          "http://www.w3.org/2000/svg",
          "fill",
          "none",
          "viewBox",
          "0 0 24 24",
          "height",
          "24",
          "width",
          "24",
          1,
          "facebook",
        ],
        [
          "d",
          "M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z",
        ],
        [1, "down"],
        ["href", "https://wa.me/6289525503357", "target", "_blank"],
        [1, "card3"],
        [
          "width",
          "30",
          "height",
          "30",
          "viewBox",
          "0 0 24 24",
          "xmlns",
          "http://www.w3.org/2000/svg",
          1,
          "whatsapp",
        ],
        [
          "d",
          "M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z",
        ],
        ["href", "mailto:a.aryanvdira@gmail.com"],
        [1, "card4"],
        [
          "xmlns",
          "http://www.w3.org/2000/svg",
          "fill",
          "none",
          "viewBox",
          "0 0 24 24",
          "height",
          "24",
          "width",
          "24",
          1,
          "gmail",
        ],
        [
          "d",
          "M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z",
        ],
        [1, "top-right"],
        [1, "title"],
        [1, "bottom-container"],
      ],
      template: function (n, o) {
        n & 1 &&
          (p(0, "div", 0),
          R(1, "app-sidebar"),
          p(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(
            7,
            "a",
            6
          )(8, "button", 7),
          Dt(),
          p(9, "svg", 8)(10, "g", 9)(11, "g", 10),
          R(12, "path", 11),
          m()()()()(),
          St(),
          p(13, "button", 12),
          Dt(),
          p(14, "svg", 13),
          R(15, "path", 14),
          m()()(),
          St(),
          p(16, "div", 15)(17, "a", 16)(18, "button", 17),
          Dt(),
          p(19, "svg", 18),
          R(20, "path", 19),
          m()()(),
          St(),
          p(21, "a", 20)(22, "button", 21),
          Dt(),
          p(23, "svg", 22),
          R(24, "path", 23),
          m()()()()(),
          St(),
          p(25, "div", 24)(26, "div", 25)(27, "span"),
          f(28, "Lets Make"),
          m(),
          p(29, "span"),
          f(30, "Our"),
          m(),
          p(31, "Span"),
          f(32, "Colaboration"),
          m()()()(),
          R(33, "div", 26),
          m()()());
      },
      dependencies: [Pe],
      styles: [
        ".fullcontainer[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100vw;min-height:100vh;background-image:url(https://i.pinimg.com/736x/24/b3/c8/24b3c8cf160f3cb8d890ee7e87968d4a.jpg);background-size:cover}.container[_ngcontent-%COMP%]{position:relative;top:56.5px;padding-bottom:10px;justify-content:center;width:90vw;height:34vw;background-color:#fff;margin-top:30px;background:#ffffff80;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(4px);border-left:1px solid rgba(255,255,255,.18);border-right:1px solid rgba(255,255,255,.18);border-top:none;display:flex;border-bottom-right-radius:10px;border-bottom-left-radius:10px;align-items:center;overflow-y:auto;overflow-x:hidden}.article[_ngcontent-%COMP%]{height:auto;position:absolute;top:30px;width:870px}.top-container[_ngcontent-%COMP%]{margin-top:30px;display:flex;flex-direction:row;gap:30px;margin-bottom:40px}.title[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:40px}.top-right[_ngcontent-%COMP%]{font-size:64px;font-weight:600;color:#f8f8f8;width:600px;height:200px;padding:30px;margin-top:60px}.top-left[_ngcontent-%COMP%]{padding:20px;border-radius:10px;display:flex;flex-direction:column;gap:.5em;margin-left:80px;margin-top:50px}.up[_ngcontent-%COMP%], .down[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:.5em}.card1[_ngcontent-%COMP%]{width:90px;height:90px;outline:none;border:none;background:#fff;border-radius:90px 5px 5px;box-shadow:#32325d40 0 2px 5px -1px,#0000004d 0 1px 3px -1px;transition:.2s ease-in-out}.instagram[_ngcontent-%COMP%]{margin-top:1.5em;margin-left:1.2em;fill:#cc39a4}.card2[_ngcontent-%COMP%]{width:90px;height:90px;outline:none;border:none;background:#fff;border-radius:5px 90px 5px 5px;box-shadow:#32325d40 0 2px 5px -1px,#0000004d 0 1px 3px -1px;transition:.2s ease-in-out}.facebook[_ngcontent-%COMP%]{margin-top:1.5em;margin-left:-.9em;fill:#03a9f4}.card3[_ngcontent-%COMP%]{width:90px;height:90px;outline:none;border:none;background:#fff;border-radius:5px 5px 5px 90px;box-shadow:#32325d40 0 2px 5px -1px,#0000004d 0 1px 3px -1px;transition:.2s ease-in-out}.whatsapp[_ngcontent-%COMP%]{margin-top:-.6em;margin-left:1.2em;fill:#0f0}.card4[_ngcontent-%COMP%]{width:90px;height:90px;outline:none;border:none;background:#fff;border-radius:5px 5px 90px;box-shadow:#32325d40 0 2px 5px -1px,#0000004d 0 1px 3px -1px;transition:.2s ease-in-out}.gmail[_ngcontent-%COMP%]{margin-top:-.9em;margin-left:-1.2em;fill:#f14336}.card1[_ngcontent-%COMP%]:hover{cursor:pointer;scale:1.1;background-color:#cc39a4}.card1[_ngcontent-%COMP%]:hover   .instagram[_ngcontent-%COMP%]{fill:#fff}.card2[_ngcontent-%COMP%]:hover{cursor:pointer;scale:1.1;background-color:#1877f2}.card2[_ngcontent-%COMP%]:hover   .facebook[_ngcontent-%COMP%]{fill:#fff}.card3[_ngcontent-%COMP%]:hover{cursor:pointer;scale:1.1;background-color:#0f0}.card3[_ngcontent-%COMP%]:hover   .whatsapp[_ngcontent-%COMP%]{fill:#fff}.card4[_ngcontent-%COMP%]:hover{cursor:pointer;scale:1.1;background-color:#ff0004}.card4[_ngcontent-%COMP%]:hover   .gmail[_ngcontent-%COMP%]{fill:#fff}body[_ngcontent-%COMP%]{font-family:system-ui,sans-serif;perspective:1500px;background:linear-gradient(#fff,#efefef)}.bottom-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;gap:15px}",
      ],
    }));
  let i = e;
  return i;
})();
var Hh = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: Za },
    { path: "project", component: Ga },
    { path: "detail", component: bn },
    { path: "about", component: Xa },
    { path: "contact", component: Ka },
  ],
  Qa = (() => {
    let e = class e {};
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵmod = C({ type: e })),
      (e.ɵinj = w({ imports: [jr.forRoot(Hh), jr] }));
    let i = e;
    return i;
  })();
var Ja = (() => {
  let e = class e {
    constructor() {
      this.title = "portofolio";
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵcmp = j({
      type: e,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function (n, o) {
        n & 1 && R(0, "router-outlet");
      },
      dependencies: [Ir],
    }));
  let i = e;
  return i;
})();
var pe = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = C({ type: e })),
    (e.ɵinj = w({ imports: [G] }));
  let i = e;
  return i;
})();
var ec = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = C({ type: e })),
    (e.ɵinj = w({ imports: [G, pe] }));
  let i = e;
  return i;
})();
var tc = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = C({ type: e })),
    (e.ɵinj = w({ imports: [G, pe] }));
  let i = e;
  return i;
})();
var ic = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = C({ type: e })),
    (e.ɵinj = w({ imports: [G] }));
  let i = e;
  return i;
})();
var Wh = "@",
  Yh = (() => {
    let e = class e {
      constructor(t, n, o, s, a) {
        (this.doc = t),
          (this.delegate = n),
          (this.zone = o),
          (this.animationType = s),
          (this.moduleImpl = a),
          (this._rendererFactoryPromise = null),
          (this.scheduler = v(ko, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        return (this.moduleImpl ?? import("./chunk-XAKW6XPL.js"))
          .catch((n) => {
            throw new F(5300, !1);
          })
          .then(({ ɵcreateEngine: n, ɵAnimationRendererFactory: o }) => {
            this._engine = n(this.animationType, this.doc, this.scheduler);
            let s = new o(this.delegate, this._engine, this.zone);
            return (this.delegate = s), s;
          });
      }
      createRenderer(t, n) {
        let o = this.delegate.createRenderer(t, n);
        if (o.ɵtype === 0) return o;
        typeof o.throwOnSyntheticProps == "boolean" &&
          (o.throwOnSyntheticProps = !1);
        let s = new go(o);
        return (
          n?.data?.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise
            ?.then((a) => {
              let c = a.createRenderer(t, n);
              s.use(c);
            })
            .catch((a) => {
              s.use(o);
            }),
          s
        );
      }
      begin() {
        this.delegate.begin?.();
      }
      end() {
        this.delegate.end?.();
      }
      whenRenderingDone() {
        return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
      }
    };
    (e.ɵfac = function (n) {
      Oi();
    }),
      (e.ɵprov = _({ token: e, factory: e.ɵfac }));
    let i = e;
    return i;
  })(),
  go = class {
    constructor(e) {
      (this.delegate = e), (this.replay = []), (this.ɵtype = 1);
    }
    use(e) {
      if (((this.delegate = e), this.replay !== null)) {
        for (let r of this.replay) r(e);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      (this.replay = null), this.delegate.destroy();
    }
    createElement(e, r) {
      return this.delegate.createElement(e, r);
    }
    createComment(e) {
      return this.delegate.createComment(e);
    }
    createText(e) {
      return this.delegate.createText(e);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(e, r) {
      this.delegate.appendChild(e, r);
    }
    insertBefore(e, r, t, n) {
      this.delegate.insertBefore(e, r, t, n);
    }
    removeChild(e, r, t) {
      this.delegate.removeChild(e, r, t);
    }
    selectRootElement(e, r) {
      return this.delegate.selectRootElement(e, r);
    }
    parentNode(e) {
      return this.delegate.parentNode(e);
    }
    nextSibling(e) {
      return this.delegate.nextSibling(e);
    }
    setAttribute(e, r, t, n) {
      this.delegate.setAttribute(e, r, t, n);
    }
    removeAttribute(e, r, t) {
      this.delegate.removeAttribute(e, r, t);
    }
    addClass(e, r) {
      this.delegate.addClass(e, r);
    }
    removeClass(e, r) {
      this.delegate.removeClass(e, r);
    }
    setStyle(e, r, t, n) {
      this.delegate.setStyle(e, r, t, n);
    }
    removeStyle(e, r, t) {
      this.delegate.removeStyle(e, r, t);
    }
    setProperty(e, r, t) {
      this.shouldReplay(r) && this.replay.push((n) => n.setProperty(e, r, t)),
        this.delegate.setProperty(e, r, t);
    }
    setValue(e, r) {
      this.delegate.setValue(e, r);
    }
    listen(e, r, t) {
      return (
        this.shouldReplay(r) && this.replay.push((n) => n.listen(e, r, t)),
        this.delegate.listen(e, r, t)
      );
    }
    shouldReplay(e) {
      return this.replay !== null && e.startsWith(Wh);
    }
  };
function nc(i = "animations") {
  return (
    Mi("NgAsyncAnimations"),
    tt([
      {
        provide: Si,
        useFactory: (e, r, t) => new Yh(e, r, t, i),
        deps: [D, zi, S],
      },
      {
        provide: De,
        useValue: i === "noop" ? "NoopAnimations" : "BrowserAnimations",
      },
    ])
  );
}
var rc = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = C({ type: e })),
    (e.ɵinj = w({ imports: [G] }));
  let i = e;
  return i;
})();
var oc = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = C({ type: e })),
    (e.ɵinj = w({ imports: [G, pe, rc] }));
  let i = e;
  return i;
})();
var sc = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = C({ type: e })),
    (e.ɵinj = w({ imports: [G, pe] }));
  let i = e;
  return i;
})();
var ac = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵmod = C({ type: e, bootstrap: [Ja] })),
    (e.ɵinj = w({
      providers: [ws(), nc()],
      imports: [bs, Qa, ec, tc, pe, ic, Ha, oc, sc],
    }));
  let i = e;
  return i;
})();
_s()
  .bootstrapModule(ac)
  .catch((i) => console.error(i));
