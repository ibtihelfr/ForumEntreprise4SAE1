package tn.esprit.forum.services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.forum.repositories.ReservationRepository;
import tn.esprit.forum.services.ReservationService;
@Service
@RequiredArgsConstructor
public class ReservationServiceImp implements ReservationService {
    private final ReservationRepository reservationRepository;
}
