// Ward & Rafter Site Search Logic

function getQuery() {
    var params = new URLSearchParams(window.location.search);
    return (params.get("q") || "").trim();
}

function highlight(text, query) {
    if (!query) return text;
    var safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    var re = new RegExp("(" + safe + ")", "gi");
    return text.replace(re, "<mark style='background:#fef9e7;color:inherit;'>$1</mark>");
}

function runSearch(query) {
    var list = document.getElementById("resultsList");
    var count = document.getElementById("resultsCount");
    if (!list || !count) return;
    list.innerHTML = "";

    if (!query) {
        count.textContent = "";
        list.innerHTML = "<div class='search-no-results'><p>Enter a search term above.</p></div>";
        return;
    }

    if (typeof searchIndex === "undefined" || !Array.isArray(searchIndex)) {
        list.innerHTML = "<div class='search-no-results'><p>Search index unavailable. Please try again.</p></div>";
        return;
    }

    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    var results = [];

    searchIndex.forEach(function(page) {
        var haystack = (page.title + " " + page.description + " " + page.keywords).toLowerCase();
        var score = 0;
        terms.forEach(function(term) {
            if (haystack.indexOf(term) !== -1) score++;
        });
        if (score > 0) results.push({ page: page, score: score });
    });

    results.sort(function(a, b) { return b.score - a.score; });

    if (results.length === 0) {
        count.textContent = 'No results for "' + query + '"';
        list.innerHTML = "<div class='search-no-results'><p>No pages matched your search.</p><p>Try different keywords, or <a href='contact.html'>contact us</a> directly.</p></div>";
        return;
    }

    count.textContent = results.length + " result" + (results.length === 1 ? "" : "s") + ' for "' + query + '"';

    results.forEach(function(r) {
        var p = r.page;
        var div = document.createElement("div");
        div.className = "search-result-item";
        div.innerHTML =
            "<a href='" + p.url + "'>" + highlight(p.title, query) + "</a>" +
            "<div class='search-result-url'>wardrafter.com/" + p.url + "</div>" +
            "<p class='search-result-desc'>" + highlight(p.description, query) + "</p>";
        list.appendChild(div);
    });
}

// Run on page load
document.addEventListener("DOMContentLoaded", function() {
    var q = getQuery();
    var searchInput = document.getElementById("searchInput");
    if (searchInput && q) searchInput.value = q;
    runSearch(q);

    // Navbar search icon
    var navBtn = document.getElementById("navSearchBtn");
    var navBox = document.getElementById("navSearchBox");
    var navInput = document.getElementById("navSearchInput");
    if (navBtn && navBox && navInput) {
        navBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            navBox.classList.toggle("open");
            if (navBox.classList.contains("open")) navInput.focus();
        });
        navInput.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                var val = navInput.value.trim();
                if (val) window.location.href = "search.html?q=" + encodeURIComponent(val);
            }
        });
        document.addEventListener("click", function(e) {
            if (!navBtn.contains(e.target) && !navBox.contains(e.target)) {
                navBox.classList.remove("open");
            }
        });
    }

    // Mobile hamburger
    var toggle = document.querySelector(".mobile-menu-toggle");
    var menu = document.querySelector(".navbar-menu");
    if (toggle && menu) {
        toggle.addEventListener("click", function() { menu.classList.toggle("active"); });
    }
    document.querySelectorAll(".navbar-menu .dropdown > a").forEach(function(link) {
        link.addEventListener("click", function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle("open");
            }
        });
    });
    document.querySelectorAll(".navbar-menu a:not(.dropdown > a)").forEach(function(link) {
        link.addEventListener("click", function() {
            if (menu) menu.classList.remove("active");
        });
    });
});
