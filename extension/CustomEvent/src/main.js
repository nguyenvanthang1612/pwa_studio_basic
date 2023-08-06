import {useEventingContext} from '@magento/peregrine/lib/context/eventing';
import {useUserContext} from '@magento/peregrine/lib/context/user';
import {useEffect, useState} from 'react';
import {default as handleEvent} from './handleEvent';
import useExtensionContext from './hooks/useExtensionContext';

export default original => props => {
    const [observable, {dispatch}] = useEventingContext();

    useEffect(() => {
        const sub = observable.subscribe(async event => {
            switch (event.type) {
                case 'CART_PAGE_VIEW':
                    console.log('Logging event:', {
                        type: event.type,
                        ...event.payload,
                        products: formatCartProducts(event.payload.products)
                    });
                    break;
                case 'CHECKOUT_PAGE_VIEW':
                    console.log('Logging event:', {
                        type: event.type,
                        ...event.payload,
                        products: formatCartProducts(event.payload.products)
                    });
                    break;
                case 'ORDER_CONFIRMATION_PAGE_VIEW':
                    console.log('Logging event:', {
                        type: event.type,
                        ...event.payload,
                        products: formatCartProducts(event.payload.products)
                    });
                    break;
                default:
                    console.log('Logging event:', event);
                    break;
            }
        })
    });

    return original(props);
};
