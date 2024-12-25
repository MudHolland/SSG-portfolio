module.exports = {
    dateFilter: function(date) {
        const options = { year: 'numeric', month: 'long' };
        return `Uitgevoerd in ${new Date(date).toLocaleDateString('nl-NL', options)}`;
    },
    dateToMonthYear: function(date) {
        const options = { year: 'numeric', month: 'long' };
        return new Date(date).toLocaleDateString('nl-NL', options);
    }
};
