// namelist = ["Michael", "Lindsay", "Tobias", "Byron", "George", "Janet", "Emma", "Eve", "Charles", "Tracey"]


sort_up.onclick = function() {
    console.log("sort_up");
    container.sort();
};
sort_down.onclick = function() {
    console.log("sort_down");
    container.sort().reversive();
};
search.onclick = function() {
    console.log("sort_up");
    let a = document.querySelector("input_search").value;
    console.log(a);
};