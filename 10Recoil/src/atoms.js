import {atom, selector} from 'recoil';

export const netwrokAtom = atom({
    key:'networkAtom',
    default:104
});
export const jobsAtom = atom({
    key:'jobsAtom',
    default:0
});
export const notificationAtom = atom({
    key:'notificationAtom',
    default:12
});
export const messagingAtom = atom({
    key:'messagingAtom',
    default:0
});
//Uses of a Selector
export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get: ({get})=>{
        const netwrokAtomCount = get(netwrokAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom);
        return netwrokAtomCount+jobsAtomCount+notificationAtomCount+messagingAtomCount;
    }
})