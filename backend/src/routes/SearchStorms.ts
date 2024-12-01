import {SearchSimilar} from "../controllers/Search"
import { Express } from "express"

export const SearchStorm = (app : Express) => {
    app.get ('/search', SearchSimilar)
}

