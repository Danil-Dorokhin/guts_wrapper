Hey hey, people, i was tired of writing thousands of reject and pending cases in my redux-toolkit setup so i created this abomination. It provides slices that can handle any action's loading (and errors or rejects in the future) and a wrapper component that can react accordingly to whatever action's status. I will rewrite readme someday.

Step I
import {gutsLoading} from "guts_wrapper"

Step II
add gutsLoading to your combineReducers

Step III
wrap something in GutsWrapper (you can style it in any way like div) and pass action name to which it should react in props like <GutsWrapper action="reducerName/getSomethingList"></GutsWrapper>

P.S. Its work in progress, reject and error handling will be added soon with custom loader support and flexiblity