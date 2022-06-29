import Api from './Api';

const endPoint = '/api/CartaoLead';

const ApiCartaoLead = {

    Abrir: async (id) =>{
        let res = await Api.get(`${endPoint}/${id}/Abrir`);
        console.log(res);
        return res;
    },

    BuscaPorId: async (id) => {
        let res = await Api.get(`${endPoint}/${id}`);
        console.log(res);
        return res;
    },

    BuscaTodos: async () => {
        let res = await Api.get(`${endPoint}`);
        console.log(res);
        return res;
    },

    Salvar: async (val) => {
        let res = await Api.post(endPoint, { body: val});
        console.log(res);
        return res;
    },

    Atualizar: async (val) => {
        let res = await Api.put(endPoint, { body: val});
        console.log(res);
        return res;
    },

    Excluir: async (id) => {
        let res = await Api.delete(`${endPoint}/${id}`);
        console.log(res);
        return res;
    }
}

export default ApiCartaoLead;