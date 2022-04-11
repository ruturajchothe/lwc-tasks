const events = {};

const samePageRef = (page1Ref, page2Ref) => {
    const obj1 = page1Ref.attributes;
    const obj2 = page2Ref.attributes;

    return Object.keys(obj1)
    .concat(Object.keys(obj2))
    .every(key => {
        return obj1[key] === obj2[key];
    })
}

// Register a callback for an event
// @param {string} eventName - name of the event to listen for
// @param {Function} callback - Function to invoke when said event is fired
// @param {object} thisArg - THe value to be passed as thisparameter to callback function is bound

const registerListener = (eventName, callback, thisArg) => {
    // Checking listener has a pageRef property
    if(!thisArg.pageRef) {
        throw new Error(
            'PubSub event needs "@wire(currentPageReference) pageRef" property'
        )
    }

    if(!events[eventName]) {
        events[eventName] = [];
    }

    const duplicate = events[eventName].find(listener => {
        return listener.callback === callback && listener.thisArg === thisArg;
    })

    if(!duplicate) {
        events[eventName].push({ callback, thisArg });
    }
}


// Unregister a callback for event
// @param {string} eventName - name of the event to listen for
// @param {Function} callback - Function to invoke when said event is fired
// @param {object} thisArg - THe value to be passed as thisparameter to callback function is bound

const unregisterListener = (eventName, callback, thisArg) => {
    if(events[eventName]){
        events[eventName] = events[eventName].filter(listener => {
            listener.callback !== callback || listener.thisArg !== thisArg;
        })
    }
}


// Unregister All event listeners bound to an object
// @param {object} thisArg - THe value to be passed as thisparameter to callback function is bound

const unregisterAllListeners = thisArg => {
    Object.keys(events).forEach(eventName => {
        events[eventName] = events[eventName].filter(listener => {
            listener.thisArg !== thisArg
        })
    })
}


// Fire an event to listeners
// param {object} pageRef - Reference of the page that represents event scope
// param {string} eventName - Name of the event to fire
// param {*} payload - payload to be fired

const fireEvent = (pageRef, eventName, payload) => {
    if(events[eventName]){
        const listeners = events[eventName];
        listeners.forEach(listener => {
            if(samePageRef(pageRef, listener.thisArg.pageRef)){
                try{
                    listener.callback.call(listener.thisArg, payload);
                }catch(e) {
                    console.error(e);
                }
            }
        })
    }
}


// Export all the methods 

export { 
    registerListener,
    unregisterListener,
    unregisterAllListeners,
    fireEvent
}