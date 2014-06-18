import pickle

global high_scores

file_name = 'highscores.pkl'

def load_scores():
    try:
        with open(file_name, 'rb') as in_file:
            return pickle.load(in_file)
    except IOError:
        return {}

def save_scores():
    with open(file_name, 'wb') as out_file:
        pickle.dump(high_scores, out_file)

def is_high_score(name, score):
    global high_scores
    try:
        curr_high_score = high_scores.get(name, score-1)
    except TypeError:
        raise TypeError('The score arguement must be a number.')
    is_new_high_score = score > curr_high_score
    if is_new_high_score:
        high_scores[name] = score
        save_scores()
    return is_new_high_score

def print_scores():
    score_line = '{{name:>{col_width}}} | {{score}}'.format(col_width=(80-3)//2)
    for name, score in high_scores.items():
        print(score_line.format(name=name, score=score))

high_scores = load_scores()  # this is run on import and on run

if __name__ == '__main__':  # this is run on run only
    # raw_input used only for testing, normally use variables or values instead
    if is_high_score(raw_input('Name: ').title(), int(raw_input('Score: '))):
        print('Congratulations on your new high score!')
    print_scores()
