 rows.forEach((row, idx) => {
      const split = row.split(',');
      const last = split.length - 1;

      if (idx > 0) {
        fields[split[last]].push(split[0]);
      }
    });

    console.log(`Number of students: ${size}`);

    for (const [key, val] of Object.entries(fields)) {
      const splitKey = key.split('\r')[0];
      console.log(
        `Number of students in ${splitKey}: ${val.length}. List: ${val.join(
          ', ',
        )}`,
      );
    }
    return { size, fields };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
