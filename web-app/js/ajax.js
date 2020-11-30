const HTTP_STATUS_CODE = {
    OK: 200,
    CREATED: 201,

    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,

    SERVER_ERROR: 500
}

class RequestManager {
    loadFunction;

    static setLoadFunction(methods) {
        this.loadFunction = function () {
            const responseData = this.response;

            switch (this.status) {
                case HTTP_STATUS_CODE.OK:
                    methods.SUCCESS(responseData);
                    break;
                case HTTP_STATUS_CODE.BAD_REQUEST:
                    methods.FAIL(responseData);
                    break;
            }
        }
    }

    static getData(url) {
        const requestObject = new XMLHttpRequest();

        requestObject.responseType = "json";

        requestObject.open("GET", url, true);

        requestObject.send();

        requestObject.readyState("load", this.loadFunction);
    }

    static sendData(httpMethod, url, data) {
        const requestObject = new XMLHttpRequest();

        requestObject.responseType = "json";

        requestObject.open(httpMethod, url, true);

        requestObject.setRequestHeader('Content-Type', 'application/json');

        requestObject.send(JSON.stringify(data));

        requestObject.readyState("load", this.loadFunction);
    }

    static goBackPage() {
        history.back();
    }
}