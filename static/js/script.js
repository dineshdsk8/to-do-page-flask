document.getElementById("todoForm").addEventListener("submit", async function(e){
    e.preventDefault();

    const formData = new FormData(this);

    const response = await fetch("/submittodoitem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            itemName: formData.get("itemName"),
            itemDescription: formData.get("itemDescription")
        })
    });

    const result = await response.json();
    alert(result.message);
});
