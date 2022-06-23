def compare_triplets(a, b):
    output_array = [0, 0]
    number_of_questions = 3

    for index in range(number_of_questions):
        if a[index] > b[index]:
            output_array[0] += 1
        elif a[index] < b[index]:
            output_array[1] += 1
        else:
            continue
    
    return output_array


print(compare_triplets([10, 11, 48], [20, 11, 47]))