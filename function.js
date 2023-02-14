// global function
function showProductQuantityAmount(id, value) {
    document.getElementById(id).innerText = value
}

function getValue(id) {
    const input_field = document.getElementById(id)
    const get_value = input_field.value

    return get_value
}

function titleAmount(id) {
    return title_amount = document.getElementById(id).innerText
}
// global function





// --------- football ---------
function buyFootball() {
    const get_value = getValue("football-quantity")

    const calculate_quantity = get_value * 800;
    showProductQuantityAmount("football", calculate_quantity)

    total()
}

// --------- Skin Gourd ---------
function buySkinGourd() {
    const get_value = getValue("skin-gourd-quantity")

    const calculate_quantity = get_value * 600;
    showProductQuantityAmount("gourd", calculate_quantity)

    total()
}

// --------- football Boot ---------
function buyFootballBoot() {
    const get_value = getValue("football-boot-quantity")

    const calculate_quantity = get_value * 4000;
    showProductQuantityAmount("boot", calculate_quantity)

    total()
}

// --------- total ---------

function total() {
    const football = titleAmount("football")
    const skin_gourd = titleAmount("gourd")
    const football_boot = titleAmount("boot")

    const total = parseFloat(football) + parseFloat(skin_gourd) + parseFloat(football_boot)

    showProductQuantityAmount("total", total)
}

// --------- coupon ---------

function getCouponCode() {
    const input_field = getValue("promo-code")

    if (parseInt(input_field) === 101) {
        const total_amount = titleAmount("total")

        const discount_amount = total_amount - (total_amount * 0.1)
        // titleAmount("all-total") = discount_amount
        // console.log(discount_amount)

        showProductQuantityAmount("all-total", discount_amount)
    }
    else {
        console.log("nan")
    }
}