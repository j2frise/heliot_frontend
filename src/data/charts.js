
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const trafficShares = [
    { id: 1, label: "Albatros", value: 70, color: "secondary", icon: faCaretRight },
    { id: 2, label: "Outil collis", value: 15, color: "primary", icon: faCaretRight },
    { id: 3, label: "Anap", value: 35, color: "tertiary", icon: faCaretRight }
];

const totalOrders = [
    { id: 1, label: "July", value: [1, 5, 2, 5, 4, 3], color: "primary" },
    { id: 2, label: "August", value: [2, 3, 4, 8, 1, 2], color: "secondary" }
];

export {
    trafficShares,
    totalOrders
};