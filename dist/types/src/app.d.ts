import { Elysia } from 'elysia';
import { AppError } from './core/error';
export declare const app: Elysia<"", {
    decorator: import("logixlysia").EmptyElysiaSlot;
    store: {
        beforeTime?: bigint | undefined;
        logger: import("logixlysia").Logger;
        pino: import("logixlysia").Pino;
    };
    derive: import("logixlysia").EmptyElysiaSlot;
    resolve: import("logixlysia").EmptyElysiaSlot;
}, {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
} & {
    error: {};
    typebox: import("@sinclair/typebox").TModule<{}, {}>;
} & {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {
        readonly AppError: AppError;
    };
}, {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    macro: {};
    macroFn: {};
    parser: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
}, {
    [x: string]: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: Bun.BunFile;
            };
        };
    };
} & {
    "health-check": {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    status: string;
                    message: string;
                    checks: {
                        DATABASE: boolean;
                        SMTP: boolean;
                    };
                };
            };
        };
    };
} & {
    get: {
        body: unknown;
        params: {};
        query: unknown;
        headers: unknown;
        response: {};
    };
} & {
    api: {
        "product-examples": {};
    } & {
        "product-examples": {
            get: {
                body: {};
                params: {};
                query: {
                    limit?: number | undefined;
                    page?: number | undefined;
                    q?: string | undefined;
                };
                headers: {};
                response: {
                    200: {
                        meta?: {
                            limit: number;
                            page: number;
                            totalItems: number;
                            totalPages: number;
                            hasNext: boolean;
                            hasPrev: boolean;
                        } | undefined;
                        message: string;
                        data: {
                            user: {
                                id: string;
                                name: string;
                                email: string;
                                image: string | null;
                            };
                            id: string;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            description: string | null;
                            price: string;
                            stock: number;
                        }[];
                        status: string | number;
                        path: string;
                        timeStamp: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    } & {
        "product-examples": {
            ":id": {
                get: {
                    body: {};
                    params: {
                        id: string;
                    };
                    query: {};
                    headers: {};
                    response: {
                        200: {
                            meta?: {
                                limit: number;
                                page: number;
                                totalItems: number;
                                totalPages: number;
                                hasNext: boolean;
                                hasPrev: boolean;
                            } | undefined;
                            message: string;
                            data: {
                                user: {
                                    id: string;
                                    name: string;
                                    email: string;
                                    image: string | null;
                                };
                                id: string;
                                name: string;
                                createdAt: Date;
                                updatedAt: Date;
                                description: string | null;
                                price: string;
                                stock: number;
                            };
                            status: string | number;
                            path: string;
                            timeStamp: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    } & {
        "product-examples": {
            "my-products": {
                get: {
                    body: {};
                    params: {};
                    query: {
                        limit?: number | undefined;
                        page?: number | undefined;
                        q?: string | undefined;
                    };
                    headers: {};
                    response: {
                        200: {
                            meta?: {
                                limit: number;
                                page: number;
                                totalItems: number;
                                totalPages: number;
                                hasNext: boolean;
                                hasPrev: boolean;
                            } | undefined;
                            message: string;
                            data: {
                                id: string;
                                name: string;
                                createdAt: Date;
                                updatedAt: Date;
                                description: string | null;
                                price: string;
                                stock: number;
                            }[];
                            status: string | number;
                            path: string;
                            timeStamp: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    } & {
        "product-examples": {
            post: {
                body: {
                    description?: string | null | undefined;
                    stock?: number | undefined;
                    name: string;
                    price: number;
                };
                params: {};
                query: {};
                headers: {};
                response: {
                    200: {
                        meta?: {
                            limit: number;
                            page: number;
                            totalItems: number;
                            totalPages: number;
                            hasNext: boolean;
                            hasPrev: boolean;
                        } | undefined;
                        message: string;
                        data: {
                            id: string;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            description: string | null;
                            price: string;
                            stock: number;
                        };
                        status: string | number;
                        path: string;
                        timeStamp: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    } & {
        "product-examples": {
            ":id": {
                patch: {
                    body: {
                        name?: string | undefined;
                        description?: string | null | undefined;
                        price?: number | undefined;
                        stock?: number | undefined;
                    };
                    params: {
                        id: string;
                    };
                    query: {};
                    headers: {};
                    response: {
                        200: {
                            meta?: {
                                limit: number;
                                page: number;
                                totalItems: number;
                                totalPages: number;
                                hasNext: boolean;
                                hasPrev: boolean;
                            } | undefined;
                            message: string;
                            data: {
                                id: string;
                                name: string;
                                createdAt: Date;
                                updatedAt: Date;
                                description: string | null;
                                price: string;
                                stock: number;
                            };
                            status: string | number;
                            path: string;
                            timeStamp: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    } & {
        "product-examples": {
            ":id": {
                delete: {
                    body: {};
                    params: {
                        id: string;
                    };
                    query: {};
                    headers: {};
                    response: {
                        200: {
                            meta?: {
                                limit: number;
                                page: number;
                                totalItems: number;
                                totalPages: number;
                                hasNext: boolean;
                                hasPrev: boolean;
                            } | undefined;
                            message: string;
                            data: {
                                id: string;
                                name: string;
                                createdAt: Date;
                                updatedAt: Date;
                                description: string | null;
                                price: string;
                                stock: number;
                            };
                            status: string | number;
                            path: string;
                            timeStamp: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}>;
export type App = typeof app;
