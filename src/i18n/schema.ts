export type DictSchema = {
    app: {
        title: string;
        subtitle: string;
        nav: {
            home: string;
            search: string;
            products: string;
            messages: string;
        };
    };
    search: {
        heading: string;
        placeholder: string;
        pending: string;
    };
    products: {
        listHeading: string;
        back: string;
    };
    messages: {
        heading: string;
        placeholder: string;
        send: string;
        info: string;
        empty: string;
    };
};
