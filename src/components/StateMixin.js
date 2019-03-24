import {encodeHash, decodeHash} from '../utils';

export default {
    computed: {
        currentStates () {
            const states = decodeHash(window.location.hash);
            this.type = states.type;
            return states;
        }
    },
    methods: {
        setState (state) {
            location.hash = encodeHash(Object.assign({}, decodeHash(location.hash), state));
        }
    }
}
