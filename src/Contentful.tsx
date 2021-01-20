import {createClient} from 'contentful';

export default createClient({
    space:process.env.REACT_APP_SPACE_API_KEY ?? '',
    accessToken:process.env.REACT_APP_SPACE_ACCESS_TOKEN ?? ''
});