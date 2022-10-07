const database = {
    fish: [
        {
            name: "Misker",
            image: 'url("https://www.thesprucepets.com/thmb/815AGRG9gPk_xTtqEJEFXKwf6uE=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-178133895-5aaefce004d1cf003691cf6c.jpg")',
            species: "Bronze Corydora",
            food: "Mainly feed on small crustaceans, worms, and insects",
            length:2.5,
            dateHarvested:"07/04/2022",
            location:"Argentina",
            careTips:"All corys like to dig in the substrate in search of food. To avoid irritation to their barbels, use small, smooth-edged gravel or sand as the substrate. They tend to be shy and should be provided with hiding places (preferably of wood or stone), as well as floating plants to subdue the lighting. They prefer low water levels similar to the shallow waters near the banks of the Amazon tributaries that are their native habitat."   
        },
        {
            name: "Angela",
            image: 'url("https://www.thesprucepets.com/thmb/TWnd3hfMPjP10cz5laz4nBACANw=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/blue-green-chromis-fish-species-profile-4797865-hero-c69f6ebebb0449b6b6964bb46561df7b.jpg")',
            species: "Blue Green Chromis",
            food: "Feed a mix of meaty and herbivore foods, including flakes, pellets and frozen foods",
            length:3,
            dateHarvested:"3/01/2022",
            location:"New Guinea",
            careTips:"A small group of Blue Green Chromis will tend to school together or may join up with other small, schooling reef fishes. Even though Blue Green Chromis are small, if you wish to keep a school, your tank should be large enough to provide plenty of swimming space. Overcrowding a saltwater aquarium contributes to territory spats between fish, poor water quality and poor fish health."    
        },
        {
            name: "Clive",
            image: 'url("https://www.thesprucepets.com/thmb/b67sSiIB4qaFJUsO0zTY2IEEbn0=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-147048222-e5894a8994ab4618a4d2f88ad7364d31.jpg")',
            species: "Six Line Wrasse",
            food: "Natural foragers and will nibble at small invertebrates in your aquarium.",
            length:3,
            dateHarvested:"06/21/2021",
            location:"coast of Fiji",
            careTips:"Once established, the Six Line Wrasse is relatively easy to care for. They will be seen foraging between cracks and crevices in the substrate and live rock, mainly keeping to themselves. Be sure to provide a rich environment with many places to explore to keep your wrasse out of trouble with its tank-mates."    
        },
        {
            name: "Ryu",
            image: 'url("https://images.unsplash.com/photo-1582623838120-455da222cdc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2VhJTIwbGlmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60")',
            species: "Siamise Fighting Fish",
            food: "Live foods preferred, will eat flakes and frozen foods",
            length:3,
            dateHarvested:"06/21/2021",
            location:"Cambodia, Thailand",
            careTips:"Optimally, the water for keeping bettas healthy should be soft, warm, with a neutral to slightly acidic pH. Water movement should be kept to a minimum, which means that power filters and powerheads are not suitable. Bettas may be kept in a community tank as long as the water conditions are met, and if no aggressive or fin-nipping fish are present. However, only one male may be kept in each aquarium, unless they are separated by a barrier."    
        },
        {
            name: "Livia",
            image: 'url("https://www.thesprucepets.com/thmb/TJPEfz4ILgRZRvPxmsulkPuAbCw=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BirdWrasseFish-GettyImages-528024082-5a05e2d9b39d0300376a018e.jpg")',
            species: "Bird Wrasseise Fighting Fish",
            food: "Live foods preferred, will eat flakes and frozen foods",
            length:11,
            dateHarvested:"03/22/2022",
            location:"Red Sea",
            careTips:"The bird wrasse is considered easy to care for. It is better to choose smaller individuals that will adapt better to captivity. When choosing your bird wrasse, keep in mind they are very smart and will have done everything they can to escape capture in the wild. Damaged fins or missing scales are easily healed, but a specimen with damage to the mouth or eyes can easily die from those injuries within a short period of time, so, avoid those specimens."    
        },
        {
            name: "Theodore",
            image: 'url("https://www.thesprucepets.com/thmb/OBcDW-KGsP5K-bF_r5FXb1KrzT4=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/snowflake-eel-584a02913df78c491ef4ad92.jpg")',
            species: "Snowflake Eel",
            food: "Frozen or freeze-dried krill, fish, shrimp, clams, squid, octopus, scallops, feeder fish, and most meaty foods enriched with vitamins",
            length:24,
            dateHarvested:"04/13/2022",
            location:"Indo-Pacific reefs from Hawaii",
            careTips:"This is a very hardy eel, but an escape artist; a tightly-fitting canopy is ideal. Most of the eels that do die (or get lost) in hobbyist aquariums fell victim to poorly sealed tanks. The snowflake moray eel has the ability to find and crawl out of the smallest hole in the aquarium top, so make sure all of these holes are well-covered. They can slide out and may make their way through PVC plumbing into filter bags or the aquarium sump."    
        },

    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}