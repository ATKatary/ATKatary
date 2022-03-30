/**
 * Changes the visibility of an element 
 * 
 * @param {*} action either show or hide
 * @param {*} id of the element to change visibility of
 */
export function changeVisibility(action: string, id: string): void {
    const element = document.getElementById(id);
    const expandedElement = document.getElementById(id + "Expanded");
    if (element === null || expandedElement === null) return;
    switch (action) {
      case "show" : {
        element.style.visibility = "hidden";
        expandedElement.style.visibility = "visible";
        break;
      }
      case "hide" : {
        element.style.visibility = "visible";
        expandedElement.style.visibility = "hidden";
        break;
      }
      default : break;
    }
  };