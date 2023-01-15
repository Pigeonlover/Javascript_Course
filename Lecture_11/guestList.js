
// Create an empty array that will store the names of the guests
let guestList = [];

// A while loop that asks the user to enter names one by one, then adds
// them to the guest-list array
while (true) {

  const guestName = prompt("Please enter one guest's name:");

  // If the guest-list is full, ask the user if they want to replace a name
  if (guestList.length >= 10) {
    
    const answer = prompt("The guest-list cannot contain more than 10 names. Do you want to replace a name? y/n:");

    if (answer.toLowerCase() === 'y') {
      // If the user answers yes, show the list and ask them which name they 
      // want to replace
      const oldName = prompt(`This is your current guest-list:\n${guestList.join(', ')}.\nPlease enter the name of the person you want to replace:`);
      const index = guestList.indexOf(oldName);

      // If oldName is found in the guest-list, replace it with the new name 
      // they last enered
      if (index !== -1) {
        guestList[index] = guestName;
        // Show the guest-list and stop the loop
        alert(`Your guest-list: ${guestList.join(', ')}.`);
        break;

      } else {
        // If oldName is not found, show an error message instead and break 
        // the loop
        alert(`${oldName} was not found in the guest-list. Please try again.`);
        break;
      }

    // If the user doesn't agree to replace a name, show the guest-list and 
    // stop the lopp
    } else if (answer.toLowerCase() === 'n') {
        alert(`This is your guest-list:\n${guestList.join(', ')}.`);
        break;
    // If the user enters anything else but "y" or "n", an error is shown
    // and the loop is stopped
    } else {
        alert("Error. Please try again.");
        break;
    }
  } else {
    // If the guest-list is not full yet, add the name entered by the user 
    // to the guest-list
    guestList.push(guestName);
  }
}