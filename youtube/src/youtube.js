import axios from'axios'
//please kindly delete this key
const KEY="AIzaSyA09g_nEbJXX7uMlWkT9Q_bQxQ6k5TZla0";


export const baseParams={
    part:'snippet',
    maxResults:5,
    key:KEY
}

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
 
})