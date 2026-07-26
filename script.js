/////////////////////// 📋 A copier dans le champ Entête Javascript
Highcharts.setOptions({
    chart: {
        inverted: true,
        marginLeft: 135,
        marginBottom: 80,
        backgroundColor: '#ffffff',
        style: {
            color: '#000000',
            fontFamily: 'Arial, sans-serif'
        }
    },
 //   title: {
 //       text: null,
 //       style: { color: '#000000' }
  //  },
    legend: {
        enabled: true,
        align: 'center',
        verticalAlign: 'bottom',
        y: 0,
        layout: 'horizontal',
        itemStyle: { color: '#000000' }
    },
    yAxis: {
        gridLineWidth: 0,
        labels: { style: { color: '#000000' } },
        title: { text: null }
    },
    xAxis: {
        labels: { style: { color: '#000000' } }
    },
    plotOptions: {
        series: {
            pointPadding: 0.25,
            borderWidth: 0,
            pointWidth: 20,
        }
    },
    credits: { enabled: false },
    exporting: { enabled: false }
});

// Données
var dataset_BIBOARDCOMPNAME = [


2.14, 2, 2, 1.90 , // ❌ A commenter pour utilisation Biboard ; c'est remplacer par le champ créee dans la datasource et appelé dans le champ Javascript



/////////////////////// 📋 A copier dans le champ Pied Javascript 
];
var valeurIndividuelle_BIBOARDCOMPNAME = dataset_BIBOARDCOMPNAME[0];
var objectifMin_BIBOARDCOMPNAME = dataset_BIBOARDCOMPNAME[1];
var objectifMax_BIBOARDCOMPNAME = dataset_BIBOARDCOMPNAME[2];
var groupe_BIBOARDCOMPNAME = dataset_BIBOARDCOMPNAME[3];
var maxAxe_BIBOARDCOMPNAME = Math.max(valeurIndividuelle_BIBOARDCOMPNAME, objectifMax_BIBOARDCOMPNAME, groupe_BIBOARDCOMPNAME) + 2;

// Création du graphique
var chart_BIBOARDCOMPNAME = Highcharts.chart('container_BIBOARDCOMPNAME', {
    chart: {
        marginTop: 20,
        marginBottom: 80,
        height: 170,
        backgroundColor: '#ffffff'
    },
 title: {
        text: null // <-- Ajoute cette ligne pour supprimer le titre
    },
  //  title: {
    //    text: 'Besoins / personne',
     //   style: { color: '#000000' },
     //   margin: 20
   // },
    xAxis: {
        categories: ['<span class="hc-cat-title">Moyenne']  // ✨  nom de l'axe 
    },
    yAxis: {
        min: 0,
        max: maxAxe_BIBOARDCOMPNAME,
        plotBands: [{ from: objectifMin_BIBOARDCOMPNAME, to: objectifMax_BIBOARDCOMPNAME, color: 'rgba(255, 0, 0, 0.3)' }],
        title: { text: null }
    },
    series: [
        {
            name: 'Individuel',  // ✨ nom de la serie 1
            type: 'column',
            data: [{ y: valeurIndividuelle_BIBOARDCOMPNAME, color: '#0098a6' }],  // ✨ couleur de la serie 1
            pointWidth: 20,
            showInLegend: true,
            color: '#0098a6'  // ✨ couleur de la serie 1
        },
        {
            name: 'Objectif',  // ✨ nom de la serie 2
            data: [],
            color: '#ff0000',  // ✨ couleur de la serie 2
            showInLegend: true
        },
        {
            name: 'Service',  // ✨ nom de la serie 3
            data: [],
            color: '#999999',  // ✨ couleur de la serie 3
            showInLegend: true
        }
    ],
    tooltip: {
        pointFormat: `
            <b>Individuel:</b> ${valeurIndividuelle_BIBOARDCOMPNAME}<br/>
            <b>Objectif:</b> ${objectifMin_BIBOARDCOMPNAME} - ${objectifMax_BIBOARDCOMPNAME}<br/>
            <b>Service:</b> ${groupe_BIBOARDCOMPNAME}
        `
    }
});

// Ajout des lignes d'objectif et groupe
chart_BIBOARDCOMPNAME.yAxis[0].addPlotLine({ color: '#ff0000', width: 2, value: objectifMin_BIBOARDCOMPNAME });
chart_BIBOARDCOMPNAME.yAxis[0].addPlotLine({ color: '#ff0000', width: 2, value: objectifMax_BIBOARDCOMPNAME });
chart_BIBOARDCOMPNAME.yAxis[0].addPlotLine({ color: '#999999', width: 2, value: groupe_BIBOARDCOMPNAME });
