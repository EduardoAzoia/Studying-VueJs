import api from '../../api/imgur';
import { router } from '../../main'

const IMAGES_MOCKUP = {
    "data": [
        {
            "id": "EOWm3Sx",
            "title": null,
            "description": null,
            "datetime": 1623087604,
            "type": "image/png",
            "animated": false,
            "width": 685,
            "height": 677,
            "size": 1094789,
            "views": 1,
            "bandwidth": 1094789,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": "eduardoazoia",
            "account_id": 150404992,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "deletehash": "xfvScGujRPYuXKy",
            "name": "image.png",
            "link": "https://i.imgur.com/EOWm3Sx.png"
        },
        {
            "id": "44i0jv2",
            "title": null,
            "description": null,
            "datetime": 1623086395,
            "type": "image/png",
            "animated": false,
            "width": 858,
            "height": 524,
            "size": 649846,
            "views": 2,
            "bandwidth": 1299692,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": "eduardoazoia",
            "account_id": 150404992,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "deletehash": "hC7beg75lTNagsv",
            "name": "image.png",
            "link": "https://i.imgur.com/44i0jv2.png"
        },
        {
            "id": "cd0gQQM",
            "title": null,
            "description": null,
            "datetime": 1623086303,
            "type": "image/png",
            "animated": false,
            "width": 560,
            "height": 250,
            "size": 29806,
            "views": 2,
            "bandwidth": 59612,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": "eduardoazoia",
            "account_id": 150404992,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "deletehash": "Mz3rvjPZH6KTEfj",
            "name": "image.png",
            "link": "https://i.imgur.com/cd0gQQM.png"
        },
        {
            "id": "EOWm3Sx",
            "title": null,
            "description": null,
            "datetime": 1623087604,
            "type": "image/png",
            "animated": false,
            "width": 685,
            "height": 677,
            "size": 1094789,
            "views": 1,
            "bandwidth": 1094789,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": "eduardoazoia",
            "account_id": 150404992,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "deletehash": "xfvScGujRPYuXKy",
            "name": "image.png",
            "link": "https://i.imgur.com/EOWm3Sx.png"
        },
        {
            "id": "44i0jv2",
            "title": null,
            "description": null,
            "datetime": 1623086395,
            "type": "image/png",
            "animated": false,
            "width": 858,
            "height": 524,
            "size": 649846,
            "views": 2,
            "bandwidth": 1299692,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": "eduardoazoia",
            "account_id": 150404992,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "deletehash": "hC7beg75lTNagsv",
            "name": "image.png",
            "link": "https://i.imgur.com/44i0jv2.png"
        },
        {
            "id": "cd0gQQM",
            "title": null,
            "description": null,
            "datetime": 1623086303,
            "type": "image/png",
            "animated": false,
            "width": 560,
            "height": 250,
            "size": 29806,
            "views": 2,
            "bandwidth": 59612,
            "vote": null,
            "favorite": false,
            "nsfw": null,
            "section": null,
            "account_url": "eduardoazoia",
            "account_id": 150404992,
            "is_ad": false,
            "in_most_viral": false,
            "has_sound": false,
            "tags": [],
            "ad_type": 0,
            "ad_url": "",
            "edited": "0",
            "in_gallery": false,
            "deletehash": "Mz3rvjPZH6KTEfj",
            "name": "image.png",
            "link": "https://i.imgur.com/cd0gQQM.png"
        }
    ],
    "success": true,
    "status": 200
}

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages( { rootState, commit }) {
        const { token } = rootState.auth;
        var response = {};

        await api.fetchImages(token)
            .then(res => {
                response = res;
            })
            .catch(() => {
                response = IMAGES_MOCKUP
            });  
            
        commit('setImages', response.data);     
    },
    async uploadImages({ rootState }, images) {
        const { token } = rootState.auth;

        await api.uploadImages(images, token);

        router.push('/');
    }
};

const mutations = {
    setImages(state, images) {
        state.images = images;
    }    
};  

export default {
    state,
    getters,
    actions,
    mutations
}