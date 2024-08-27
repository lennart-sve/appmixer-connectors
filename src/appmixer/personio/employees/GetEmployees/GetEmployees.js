'use strict';
const commons = require('../../personio-commons');


class GetEmployee {

    async receive(context) {
        try {
            let accessToken = await commons.getBearerToken(context);
            const authorization = 'Bearer ' + accessToken;

            let url = 'https://api.personio.de/v1/company/employees';

            const { data } = await context.httpRequest({
                url: url,
                method: 'GET',
                headers: {
                    Authorization: authorization,
                    'X-Yk-Auth-Method': 'yokoy'
                },
                json: true
            });

            // TODO: Add logging here

            return context.sendJson(data, 'employees');

        } catch (error) {
            // TODO: Add logging here
            const empty = [];
            return context.sendJson(empty, 'empty');
        }
    }
}

module.exports = new GetEmployee('maesn.personio.employees.GetEmployees');