//Atom requires a single object
//key is used to uniquly identify items
//Recoil gives access to 3 APIs; 

//1.useRecoilState-->Same as useState
//2.useRecoilValue-->Just give the value
//3.useSetRecoilValue-->Set value

import {atom, selector} from "recoil"

export const countAtom = atom({
    key: "countAtom",
    default:0
})

export const evenSelector = selector({
    key:"evenSelector",
    get:({get})=>{
        const count =get(countAtom);
        return count%2
    }
});


// export const oddSelector = selector({
//     name:'oddSelector',
//     get:(props)=>{
//         const count =props.get(countAtom);
//         return !count%2
//     }
// });