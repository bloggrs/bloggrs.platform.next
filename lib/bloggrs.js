let _localStorage = null;
// any = typeof window === 'undefined' ? {
//     getItem: (key): any => process.env[key],
//     setItem: (key, value): any => process.env[key] = value,
// } : localStorage
if (typeof window === "undefined") {
    process.env.__bloggrs__ = "{}";
    const getState = () => JSON.parse(process.env.__bloggrs__);
    const setState = (obj) => process.env.__bloggrs__ = JSON.stringify(obj);
    const getItem = (key) => getState()[key];
    const setItem = (key, value) => {
        const state = getState();
        state[key] = value;
        console.log("new", process.env.__bloggrs__);
        setState(state);
    };
    _localStorage = { getItem, setItem };
}
else
    _localStorage = localStorage;
var _localStorage$1 = _localStorage;

var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function http(path, config) {
    return __awaiter$2(this, void 0, void 0, function* () {
        const token = _localStorage$1.getItem("bloggrs::token");
        const request = new Request(path, Object.assign({}, config, { headers: Object.assign({}, (config.headers || {}), (Boolean(token) ? { "Authorization": "Bearer " + token } : {})) }));
        const response = yield fetch(request);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        // may error if there is no body, return empty array
        return response.json().catch(() => ({}));
    });
}
function get(path, config) {
    return __awaiter$2(this, void 0, void 0, function* () {
        const init = Object.assign({ method: 'get' }, config);
        return yield http(path, init);
    });
}
function post(path, body, config) {
    return __awaiter$2(this, void 0, void 0, function* () {
        const init = Object.assign({ method: 'post', body: JSON.stringify(body) }, config);
        console.log({ init, body });
        return yield http(path, init);
    });
}

var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// type CategoriesRequestOptions = {
//     page: number;
//     pageSize: number;
//     status: string;
//     query: string
// }
const auth = ({ serverUrl, BlogId }) => ({
    getAuth: (options) => __awaiter$1(undefined, void 0, void 0, function* () {
        // const query: string = qs.stringify(options)
        const endpoint = serverUrl + `/auth`;
        const { data: { user, token } } = yield get(endpoint);
        _localStorage$1.setItem('bloggrs::token', token);
        _localStorage$1.setItem('bloggrs::user_id', user.id);
        return { user, token };
    }),
    getUserId: () => {
        return _localStorage$1.getItem('bloggrs::user_id');
    }
});

const qs = {
    stringify: undefined
};
qs.stringify = function (obj) {
    const keys = Object.keys(obj);
    const new_obj = {};
    keys.forEach(key => {
        const value = obj[key];
        if (value)
            new_obj[key] = value;
    });
    return new URLSearchParams(new_obj).toString();
};

var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const categories = ({ serverUrl, BlogId }) => ({
    getCategories: (options = {
            page: 1,
            pageSize: 3,
            status: undefined,
            query: undefined
        }) => __awaiter$3(undefined, void 0, void 0, function* () {
        const query = qs.stringify(options);
        const endpoint = serverUrl + `/blogs/${BlogId}/categories?${query}`;
        const { data: { categories } } = yield get(endpoint);
        return categories;
    })
});

var __awaiter$4 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const general = ({ serverUrl, BlogId }) => ({
    getBlogHeaderWidgetData: () => __awaiter$4(undefined, void 0, void 0, function* () {
        const endpoint = serverUrl + `/blogs/${BlogId}/header-widget-data`;
        const { data } = yield get(endpoint);
        return data;
    })
});

var __awaiter$5 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const pages = ({ serverUrl, BlogId }) => ({
    getPages: (options = {
            page: 1,
            pageSize: 3,
            status: undefined,
            query: undefined
        }) => __awaiter$5(undefined, void 0, void 0, function* () {
        const query = qs.stringify(options);
        const endpoint = serverUrl + `/blogs/${BlogId}/pages?${query}`;
        console.log({ query, endpoint, serverUrl, BlogId });
        const { data: { pages } } = yield get(endpoint);
        return pages;
    })
});

var __awaiter$6 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const postcomments = ({ serverUrl, BlogId }) => ({
    createPostComment: ({ PostId, content }) => __awaiter$6(undefined, void 0, void 0, function* () {
        const endpoint = serverUrl + `/postcomments`;
        const { data: { postcomment } } = yield post(endpoint, { PostId, content }, {
            headers: { 'Content-Type': 'application/json' },
        });
        return postcomment;
    })
});

var __awaiter$7 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const posts = ({ serverUrl, BlogId }) => ({
    getPost: (PostId) => __awaiter$7(undefined, void 0, void 0, function* () {
        const endpoint = serverUrl + `/blogs/${BlogId}/posts/${PostId}`;
        const { data: { post: post$$1 } } = yield get(endpoint);
        return post$$1;
    }),
    getPostComments: (PostId) => __awaiter$7(undefined, void 0, void 0, function* () {
        const endpoint = serverUrl + `/blogs/${BlogId}/posts/${PostId}/comments`;
        const { data: result } = yield get(endpoint);
        return result;
    }),
    getPosts: (options = {
            page: 1,
            pageSize: 3,
            query: undefined,
            categories: undefined,
            status: undefined
        }) => __awaiter$7(undefined, void 0, void 0, function* () {
        const query = qs.stringify(options);
        const endpoint = serverUrl + `/blogs/${BlogId}/posts?${query}`;
        const { data: { posts } } = yield get(endpoint);
        return posts;
    }),
    likePostHandler: ({ PostId, action }) => __awaiter$7(undefined, void 0, void 0, function* () {
        const endpoint = serverUrl + `/blogs/${BlogId}/posts/${PostId}/${action}`;
        const { message } = yield post(endpoint);
        return message === "success";
    })
});

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Bloggrs class
 */
class Bloggrs {
    constructor(apiKey) {
        this.serverUrl = 'http://localhost:5500/api/v1';
        this.apiKey = null;
        this.BlogId = null;
        this.blog = null;
        this.initialized = false;
        this.initPromise = null;
        /**
        * Call this method first to set your authentication key.
        * @param {String} API Token
        */
        this.init = (apiKey) => __awaiter(this, void 0, void 0, function* () {
            yield this._initialize(apiKey);
            return this;
        });
        this.wrapper = func => {
            const obj = func(this);
            const new_obj = {};
            Object.keys(obj).forEach(key => {
                const { initialized } = this;
                if (!initialized) {
                    new_obj[key] = (...args) => __awaiter(this, void 0, void 0, function* () {
                        console.warn(`Library not initialized yet, ${key} function call delayed.`);
                        yield this.initPromise;
                        return func(this)[key](...args);
                    });
                }
                else
                    func(this)[key] = obj[key];
            });
            return new_obj;
        };
        this.categories = this.wrapper(categories);
        this.posts = this.wrapper(posts);
        this.postcomments = this.wrapper(postcomments);
        this.pages = this.wrapper(pages);
        this.general = this.wrapper(general);
        this.auth = this.wrapper(auth);
        this._initialize = (apiKey) => __awaiter(this, void 0, void 0, function* () {
            this.apiKey = apiKey;
            const res = yield post(this.serverUrl + '/blogs/api_key', { api_key: apiKey }, {
                headers: { 'Content-Type': 'application/json' },
            });
            const { data: { blog } } = res;
            this.blog = blog;
            this.BlogId = blog.id;
            this.categories = categories(this);
            this.posts = posts(this);
            this.postcomments = postcomments(this);
            this.pages = pages(this);
            this.general = general(this);
            this.auth = auth(this);
        });
        this.initPromise = this.init(apiKey).catch(err => {
            console.error('Failed to initialize');
        });
    }
}

export { Bloggrs };
//# sourceMappingURL=bloggrs.es2015.js.map
