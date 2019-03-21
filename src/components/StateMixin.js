import {encodeHash, decodeHash} from '../utils';

export default {
    computed: {
        currentStates () {
            return decodeHash(location.hash);
        }
    },
    methods: {
        setState (state) {
            location.hash = encodeHash(Object.assign({}, decodeHash(location.hash), state));
        }
    }
}
