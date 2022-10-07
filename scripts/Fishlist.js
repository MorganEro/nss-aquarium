// Import the function that returns a copy of the fish array
import { getFish } from "./database"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    const htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `
        <label class= "fish__imageAndDetails">
            <div class="fish_details">
                <div class="fish__species">${fish.details}</div>
                <div class="fish__diet">${fish.food}</div>
                <div class="fish__length">${fish.length}</div>
                <div class="fish__dateHarvested">${fish.dateHarvested}</div>
                <div class="fish__location">${fish.location}</div>               
            </div>
        </label>
`
    }
    htmlString += `</label>`

    return htmlString
}