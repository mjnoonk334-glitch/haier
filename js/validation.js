export function validateForm() {

    let valid = true;

    document
        .querySelectorAll('input[required]')
        .forEach(input => {

            if (!input.value.trim()) {

                input.classList.add('invalid');

                valid = false;

            } else {

                input.classList.remove('invalid');
            }
        });

    return valid;
}
