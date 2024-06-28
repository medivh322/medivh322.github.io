/**
 * @typedef {Object} dNode
 * @property {HTMLElement} parent
 * @property {HTMLElement} element
 * @property {HTMLElement} to
 * @property {string} breakpoint
 * @property {string} order
 * @property {number} index
 */ /**
 * @typedef {Object} dMediaQuery
 * @property {string} query
 * @property {number} breakpoint
 */ /**
 * @param {'min' | 'max'} type
 */ function $c0d2212631241d45$export$9e2d596a68cf8503(type = "max") {
    const className = "_dynamic_adapt_";
    const attrName = "data-da";
    /** @type {dNode[]} */ const dNodes = getDNodes();
    /** @type {dMediaQuery[]} */ const dMediaQueries = getDMediaQueries(dNodes);
    dMediaQueries.forEach((dMediaQuery)=>{
        const matchMedia = window.matchMedia(dMediaQuery.query);
        // массив объектов с подходящим брейкпоинтом
        const filteredDNodes = dNodes.filter(({ breakpoint: breakpoint })=>breakpoint === dMediaQuery.breakpoint);
        const mediaHandler = getMediaHandler(matchMedia, filteredDNodes);
        matchMedia.addEventListener("change", mediaHandler);
        mediaHandler();
    });
    function getDNodes() {
        const result = [];
        const elements = [
            ...document.querySelectorAll(`[${attrName}]`)
        ];
        elements.forEach((element)=>{
            const attr = element.getAttribute(attrName);
            const [toSelector, breakpoint, order] = attr.split(",").map((val)=>val.trim());
            const to = document.querySelector(toSelector);
            if (to) result.push({
                parent: element.parentElement,
                element: element,
                to: to,
                breakpoint: breakpoint ?? "767",
                order: order !== undefined ? isNumber(order) ? Number(order) : order : "last",
                index: -1
            });
        });
        return sortDNodes(result);
    }
    /**
   * @param {dNode} items
   * @returns {dMediaQuery[]}
   */ function getDMediaQueries(items) {
        const uniqItems = [
            ...new Set(items.map(({ breakpoint: breakpoint })=>`(${type}-width: ${breakpoint}px),${breakpoint}`))
        ];
        return uniqItems.map((item)=>{
            const [query, breakpoint] = item.split(",");
            return {
                query: query,
                breakpoint: breakpoint
            };
        });
    }
    /**
   * @param {MediaQueryList} matchMedia
   * @param {dNodes} items
   */ function getMediaHandler(matchMedia, items) {
        return function mediaHandler() {
            if (matchMedia.matches) {
                items.forEach((item)=>{
                    moveTo(item);
                });
                items.reverse();
            } else {
                items.forEach((item)=>{
                    if (item.element.classList.contains(className)) moveBack(item);
                });
                items.reverse();
            }
        };
    }
    /**
   * @param {dNode} dNode
   */ function moveTo(dNode) {
        const { to: to, element: element, order: order } = dNode;
        dNode.index = getIndexInParent(dNode.element, dNode.element.parentElement);
        element.classList.add(className);
        if (order === "last" || order >= to.children.length) {
            to.append(element);
            return;
        }
        if (order === "first") {
            to.prepend(element);
            return;
        }
        to.children[order].before(element);
    }
    /**
   * @param {dNode} dNode
   */ function moveBack(dNode) {
        const { parent: parent, element: element, index: index } = dNode;
        element.classList.remove(className);
        if (index >= 0 && parent.children[index]) parent.children[index].before(element);
        else parent.append(element);
    }
    /**
   * @param {HTMLElement} element
   * @param {HTMLElement} parent
   */ function getIndexInParent(element, parent) {
        return [
            ...parent.children
        ].indexOf(element);
    }
    /**
   * Функция сортировки массива по breakpoint и order
   * по возрастанию для type = min
   * по убыванию для type = max
   *
   * @param {dNode[]} items
   */ function sortDNodes(items) {
        const isMin = type === "min" ? 1 : 0;
        return [
            ...items
        ].sort((a, b)=>{
            if (a.breakpoint === b.breakpoint) {
                if (a.order === b.order) return 0;
                if (a.order === "first" || b.order === "last") return -1 * isMin;
                if (a.order === "last" || b.order === "first") return 1 * isMin;
                return 0;
            }
            return (a.breakpoint - b.breakpoint) * isMin;
        });
    }
    function isNumber(value) {
        return !isNaN(value);
    }
}


$(function() {
    (0, $c0d2212631241d45$export$9e2d596a68cf8503)();
    const companiesSwiper = new Swiper(".js-companies-swiper", {
        slidesPerView: 2,
        spaceBetween: "30",
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            // when window width is >= 320px
            425: {
                slidesPerView: 3
            }
        }
    });
    $("#burgerMenu").click(function() {
        const header = $("#headerContainer");
        header.toggleClass("active");
        $("body").toggleClass("active");
        if (header.hasClass("active")) $(".header__burger-menu").show("fast");
        else $(".header__burger-menu").hide("fast");
    });
});


