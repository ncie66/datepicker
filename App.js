class App{

    constructor(){

        this.$date_debut = $("#date_debut");
        this.$date_fin = $("#date_fin");

        this.datepicker();

    }

        datepicker(){

            var ordreDate = {

                dayNames : [ "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ],
                dayNamesMin : [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ],
                monthNames : [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre" ],
                monthNamesShort : [ "Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec" ],
                firstDay : 1,
                dateFormat : "dd/mm/yy",
                minDate : new Date (2017, 8, 7),
                maxDate : new Date (2019, 1, 0)

            };

            this.$date_debut.datepicker( ordreDate );
            this.$date_fin.datepicker( ordreDate );
    }

}
