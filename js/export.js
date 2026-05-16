export function exportExcel() {

    const wb =
      XLSX.utils.book_new();

    const data = [

      ['تقرير تشغيل محطة الحاير'],

      [],

      ['التاريخ',
      document.getElementById('reportDate').value],

      ['الاستهلاك',
      document.getElementById('power').value],

      [],

      ['إنتاج الحاير',
      document.getElementById('h_prod').value],

      ['تصدير الحاير',
      document.getElementById('h_export').value],

      ['إنتاج منفوحة',
      document.getElementById('m_prod').value],

      ['تصدير منفوحة',
      document.getElementById('m_export').value],

      ['إنتاج الشميسي',
      document.getElementById('s_prod').value],

      ['تصدير الشميسي',
      document.getElementById('s_export').value],

      [],

      ['معد التقرير',
      document.getElementById('reporter_name').value],

      ['المشرف',
      document.getElementById('supervisor_name').value]

    ];

    const ws =
      XLSX.utils.aoa_to_sheet(data);

    ws['!dir'] = 'rtl';

    XLSX.utils.book_append_sheet(
      wb,
      ws,
      'التقرير'
    );

    XLSX.writeFile(
      wb,
      `تقرير_${document.getElementById('reportDate').value}.xlsx`
    );
}
