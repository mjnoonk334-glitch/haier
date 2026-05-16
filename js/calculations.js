export function calculateSpare() {

    const capacity =
        Number(document.getElementById('h_capacity').value) || 0;

    const production =
        Number(document.getElementById('h_prod').value) || 0;

    document.getElementById('h_spare').value =
        production - capacity;
}
