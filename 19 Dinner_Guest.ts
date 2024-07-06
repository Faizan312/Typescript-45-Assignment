let Guest_List :string[] =['Imran Khan','Nawaz Sharif','Asif Ali Zardari',];
// for (let i=0; i<Guest_List.length; i++){
// console.log(`Dear Mr. `  + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n`)
// }

let absent_Guest :string = 'Imran Khan' ;
let new_Guest :string = 'Kamran Tessori' ;
Guest_List[0] = new_Guest ;

// for (let i=0; i<Guest_List.length; i++){
//     console.log(`Dear Mr. `  + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n`)
//     }

    // console.log(`Mr. ${absent_Guest} is not coming to the party.`);
    // console.log('Good News! we find big table so we are inviting 3 more guests.')

    Guest_List.unshift('Sir Zia Khan') ;
    Guest_List.splice(2 , 0 , 'Maryam Nawaz');
    Guest_List.push('Bilawal Bhutto Zardari');

    // for (let i=0; i<Guest_List.length; i++){
    //     console.log(`Dear Mr. `  + Guest_List[i] + `\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n`)
    //     }


// console.log('\nsorry we can not big table, only two peoples will be invited.\n');    

while(Guest_List.length > 2){
   let remove_Guest = Guest_List.pop();
  // console.log(`\nSorry Mr. ${remove_Guest}, You are not invited for dinner.\n `);
}

    //Hamary bchy huwe 2 invited guest 

// for (let i=0; i<Guest_List.length; i++){
//     console.log(`Dear Mr. `  + Guest_List[i] + `\n\nYou are still invited.\n\nThank You!\n\n`)
//     }

    //Mene sare guest array se remove krdiye 
    Guest_List.splice(0, 2);
    console.log(Guest_List);

    //Exercise 19
    //print a message indicating the number of people you are inviting to dinner.

    console.log(`Total number of Guest Are: ${Guest_List.length}`);