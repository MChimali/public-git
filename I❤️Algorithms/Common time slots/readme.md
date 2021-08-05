## RANDOM GENERATOR OF AVAILABILITY ##

This algorithm returns the common available slot for a certain number of people. The agendas of each person will be generated randomly, so the algorithm may or may not find a common slot.

The steps of the algorithm are.
1. Generate random Agenda.
2. Look for common available slots
3. If there is a common slot available show the slot, if there isn't then show "`Lo siento. No hay hueco disponible en el equipo.`"

The agendas can look like this:

María Availability
    08:00 - 09:00: True
    09:00 - 10:00: True          
    10:00 - 11:00: True
    11:00 - 12:00: True
    12:00 - 13:00: False
    13:00 - 14:00: False
    15:00 - 16:00: True
    16:00 - 17:00: True

Pedro Availability
    08:00 - 09:00: False
    09:00 - 10:00: False
    10:00 - 11:00: False
    11:00 - 12:00: False
    12:00 - 13:00: True
    13:00 - 14:00: True
    15:00 - 16:00: True
    16:00 - 17:00: True

Esther Availability
    08:00 - 09:00: True
    09:00 - 10:00: False
    10:00 - 11:00: True
    11:00 - 12:00: True
    12:00 - 13:00: False
    13:00 - 14:00: False
    15:00 - 16:00: True
    16:00 - 17:00: True

Marcos Availability
    08:00 - 09:00: True
    09:00 - 10:00: False
    10:00 - 11:00: True
    11:00 - 12:00: True
    12:00 - 13:00: True
    13:00 - 14:00: False
    15:00 - 16:00: True
    16:00 - 17:00: False