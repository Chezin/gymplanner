const BMRCalculator = (gender, weight, height, age) => {
    let kcal;

    // TODO replace these by constants in a bundle file
    if(gender == GENDER.MALE) {
        kcal = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362; 
    } else {
        kcal = 9.247 * weight + 3.098 * height - 3.330 * age + 447.593;
    }

    return kcal;
}