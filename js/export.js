export function exportExcel() {

    const wb = XLSX.utils.book_new();

    const data = [];

    document
        .querySelectorAll('input, textarea')
        .forEach(el => {

            data.push([
                el.id,
                el.value
            ]);
        });

    const ws =
        XLSX.utils.aoa_to_sheet(data);

    ws['!dir'] = 'rtl';

    XLSX.utils.book_append_sheet(
        wb,
        ws,
        'التقرير'
    );

    const date =
        document.getElementById('reportDate').value;

    XLSX.writeFile(
        wb,
        `تقرير_${date}.xlsx`
    );
}
